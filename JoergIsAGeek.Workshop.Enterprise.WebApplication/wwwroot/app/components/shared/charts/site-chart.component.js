"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../../services/index");
var SiteChartComponent = /** @class */ (function () {
    function SiteChartComponent(apiService) {
        this.apiService = apiService;
        this.valueAt = 0;
        this.chartData = new Array();
    }
    SiteChartComponent.prototype.onMousemove = function (event) {
        if (this.mouseDown) {
            var x_1 = event.offsetX;
            var y_1 = event.offsetY;
            var result = this.chartData.filter(function (d) {
                return d.posX === x_1 && d.posY === y_1;
            });
            if (result.length === 1) {
                var value = result[0].v;
                console.log(value);
                this.currentValue = value;
            }
            else {
                console.log("NO" + result);
            }
        }
    };
    SiteChartComponent.prototype.onMouseup = function () {
        this.mouseDown = false;
    };
    SiteChartComponent.prototype.onMousedown = function (event) {
        this.mouseDown = true;
    };
    SiteChartComponent.prototype.ngAfterViewInit = function () {
        var context = this.plotarea.nativeElement.getContext('2d');
        context.imageSmoothingEnabled = false;
        this.getPointData(context);
    };
    SiteChartComponent.prototype.ngOnInit = function () {
    };
    SiteChartComponent.prototype.getPointData = function (context) {
        var _this = this;
        if (!context)
            return;
        this.apiService.getChartData().then(function (data) {
            data.forEach(function (d) {
                _this.chartData.push({
                    x: d.x,
                    y: d.y,
                    v: d.v
                });
            });
            _this.chartData.forEach(function (tupel) {
                var v = tupel.v;
                var rgb = _this.getRgbFromValue(v);
                context.fillStyle = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + (rgb.a / 255) + ")";
                var scaledPoints = _this.scalePointsToArea(tupel.x, tupel.y);
                tupel.posX = Math.round(scaledPoints.x);
                tupel.posY = Math.round(scaledPoints.y);
                context.fillRect(scaledPoints.x, scaledPoints.y, 1, 3);
            });
        });
    };
    SiteChartComponent.prototype.scalePointsToArea = function (x, y) {
        var w = 150;
        var h = 90;
        var minX = 67;
        var minY = 33;
        var maxX = 19933;
        var maxY = 1967;
        var scaledX = (w / (maxX - minX)) * (x - minX);
        var scaledY = (h / (maxY - minY)) * (y - minY);
        return { x: scaledX, y: scaledY };
    };
    SiteChartComponent.prototype.scaleAreaToPoints = function (x, y) {
        var w = 150;
        var h = 90;
        var minX = 67;
        var minY = 33;
        var maxX = 19933;
        var maxY = 1967;
        var unscaledX = minX + x * (maxX - minX) / w;
        var unscaledY = minY + y * (maxY - minY) / h;
        return { x: unscaledX, y: unscaledY };
    };
    SiteChartComponent.prototype.getRgbFromValue = function (value) {
        if (value < 2) {
            return { r: 255, g: 0, b: 0, a: 255 };
        }
        if (value < 4) {
            return { r: 0, g: 255, b: 0, a: 255 };
        }
        return { r: 0, g: 0, b: 255, a: 255 };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SiteChartComponent.prototype, "chartData", void 0);
    __decorate([
        core_1.ViewChild('plotarea'),
        __metadata("design:type", core_1.ElementRef)
    ], SiteChartComponent.prototype, "plotarea", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Number)
    ], SiteChartComponent.prototype, "currentValue", void 0);
    __decorate([
        core_1.HostListener('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], SiteChartComponent.prototype, "onMousemove", null);
    __decorate([
        core_1.HostListener('mouseup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SiteChartComponent.prototype, "onMouseup", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SiteChartComponent.prototype, "onMousedown", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SiteChartComponent.prototype, "valueAt", void 0);
    SiteChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-chart',
            styles: [
                '.plotarea { border: 2px solid black; }',
                '.someborder { border: 1px dashed blue; }'
            ],
            templateUrl: './site-chart.component. html'
        }),
        __metadata("design:paramtypes", [index_1.ApiService])
    ], SiteChartComponent);
    return SiteChartComponent;
}());
exports.SiteChartComponent = SiteChartComponent;
//# sourceMappingURL=site-chart.component.js.map