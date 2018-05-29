const gulp = require('gulp');
const uglify = require('gulp-uglify');
const print = require('gulp-print');
const del = require('del');
const systemBuilder = require('systemjs-builder');
const inlineBuilder = require('./Scripts/inline-resources');
const gzip = require('gulp-gzip');
const rename = require('gulp-rename');
const iif = require('gulp-if');
const concat = require('gulp-concat');
const sequence = require('gulp-sequence');
const gulpSass = require('gulp-sass');
const cssClean = require('gulp-clean-css');

gulp.task('clean', function () {
  return del('./wwwroot');
});

gulp.task('copy:vendor', function () {
  return gulp.src([ // glob pattern 
    './node_modules/core-js/client/core.js',
    './node_modules/zone.js/dist/zone.js',
    './node_modules/systemjs/dist/system.js'
  ])
    .pipe(print())
    .pipe(concat('vendor.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./wwwroot/assets/js'))
    .pipe(gzip())
    .pipe(gulp.dest('./wwwroot/assets/js'));
});

gulp.task('copy:index', function () {
  return gulp.src(['./src/index.html', './src/favicon.ico'])
    .pipe(gulp.dest('./wwwroot'));
});

// For debugging we use another file and rename it accordingly 
gulp.task('copy:index:debug', function () {
  return gulp.src([
    './src/index.debug.html',
    './src/favicon.ico'
  ])
    .pipe(iif('index.debug.html', rename('index.html')))
    .pipe(gulp.dest('./wwwroot'));
});

gulp.task('copy:angular', function () {
  return gulp.src([
    './node_modules/@angular/**/bundles/*.umd.js',
    '!./node_modules/@angular/**/bundles/*-testing.*'
  ])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/lib/@angular'));
});

gulp.task('copy:html', function () {
  return gulp.src('./src/app/**/*.+(html|css)')
    .pipe(print())
    .pipe(gulp.dest('./wwwroot/app'));
});


gulp.task('copy:img', function () {
  return gulp.src('./src/assets/images/**/*.*')
    .pipe(print())
    .pipe(gulp.dest('./wwwroot/assets/images'));
});

gulp.task('copy:content', function () {
  return gulp.src('./src/assets/content/**/*.*')
    .pipe(print())
    .pipe(gulp.dest('./wwwroot/assets/content'));
});

gulp.task('copy:fonts', function () {
  return gulp.src([
    './src/assets/fonts/**/*.*',
    './node_modules/material-design-icons/iconfont/MaterialIcons-Regular.+(woff|woff2|svg|ttf|eot)'
  ])
    .pipe(print())
    .pipe(gulp.dest('./wwwroot/assets/fonts'));
});

gulp.task('pack', function () {
  return inlineBuilder('./wwwroot/app');
});

gulp.task('bundle:create', function () {
  var builder = new systemBuilder('.', {
    paths: { 'npm:': './node_modules/' },
    map: {
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'svogv': 'npm:svogv/bundles/svogv.umd.js',
      '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/index.js',
      'tslib': 'npm:tslib/tslib.js', // required by common-http
      'rxjs': 'npm:rxjs'
    },
    packages: {
      "app": { main: 'main.js', defaultExtension: "js" },
      "rxjs": { main: "Rx.js", defaultExtension: "js" }
    }
  });
  //builder.reset();
  builder.loader.defaultJSExtensions = true;
  return builder
    .buildStatic('./wwwroot/app/main.js', './wwwroot/app/main.bundle.js', {
      sourceMaps: false,
      minify: false,
      mangle: false,
      rollup: true
    })
    .then(function () {
      console.log('Bundle completed');
    });
});

gulp.task('bundle:zip', function () {
  return gulp.src('./wwwroot/main.bundle.js').pipe(gzip()).pipe(gulp.dest('./wwwroot'));
});

gulp.task('bundle', sequence('bundle:create', 'bundle:zip'));

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(gulpSass({
      includePaths: [
        './node_modules/@ng-bootstrap/ng-bootstrap'
      ]
    }).on('error', gulpSass.logError))
    .pipe(cssClean())
    .pipe(gulp.dest('./wwwroot'));
});

gulp.task('tidyup', function () {
  return del([
    './wwwroot/app/components/**',
    './wwwroot/app/configurations/**',
    './wwwroot/app/directives/**',
    './wwwroot/app/guards/**',
    './wwwroot/app/pages/**',
    './wwwroot/app/services/**',
    './wwwroot/app/viewmodels/**'
  ])
});

gulp.task('make:debug', function () {
  return gulp.src([
    './src/systemjs.config.js'
  ]).pipe(gulp.dest('./wwwroot/'))
});

// Create RxJs bundle for debugging loader (needs Rxjs <= 5.4)
gulp.task('make:rxjs', function () {
  var builder = new systemBuilder('./', {
    paths: { "rxjs/*": "node_modules/rxjs/*.js" },
    map: { "rxjs": "node_modules/rxjs" },
    packages: { "rxjs": { main: 'Rx.js', defaultExtension: "js" } }
  });
  // create the bundle we use from systemjs.config.js
  builder.bundle('rxjs', './wwwroot/assets/js/lib/Rx.js', {
    sourceMaps: true,
    minify: true,
    mangle: true
  });
});

gulp.task('copy:debug', ['copy:vendor', 'copy:index:debug', 'copy:html', 'copy:fonts', 'copy:content', 'copy:img', 'copy:angular']);

gulp.task('copy', ['copy:vendor', 'copy:html', 'copy:fonts', 'copy:index', 'copy:content', 'copy:img']);

// A debug build
gulp.task('debug', sequence('copy:debug', 'sass', 'make:debug', 'make:rxjs'));

// A production build
gulp.task('default', sequence('copy', 'sass', 'pack', 'bundle', 'tidyup'));