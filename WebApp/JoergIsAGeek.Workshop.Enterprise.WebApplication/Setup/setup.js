/**
 * NodeJs Based setup script
 * 
 * It handles these tasks, usually invoked by npm commands.
 * 
 * 1. Start all Microservices using the dotnet CLI
 * 2. Start Web Front End using dotnet CLI
 * 3. Download the swagger definition each Microservice provides
 * 4. Create the proxy in C# and store at Connected Services folder
 * 5. Re-build the frontend
 * 6. Build all, dotnet and angular/webpack client code
 * 7. Open browser and navigate to index.html
 * 
 * */
// open system default browser
const opn = require('opn');
const util = require('util');
const fetch = require('node-fetch');
const { exec, spawn } = require('child_process');
const fs = require('fs');

let pids = [];

// a helper function
function filterValueFromKey(array, str) {
  return array.filter(o => Object.keys(o).some(k => k == str))[0][str];
}

const projDesc = {
  auth: {
    ns: "JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.Authentication",
    sn: "Authentication",
    path: "../JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Authentication/JoergIsAGeek.Workshop.Enterprise.ServiceLayer.csproj",
    url: "http://127.0.0.1:5001/swagger/v1/swagger.json"
  },
  mdat: {
    ns: "JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.MachineData",
    sn: "MachineData",
    path: "../JoergIsAGeek.Workshop.Enterprise.ServiceLayer.MachineData/JoergIsAGeek.Workshop.Enterprise.ServiceLayer.csproj",
    url: "http://127.0.0.1:5005/swagger/v1/swagger.json"
  },
  wfe: {
    path: "./JoergIsAGeek.Workshop.Enterprise.WebApplication.csproj",
    url: "http://127.0.0.1:5000"
  }
};

async function dotnetBuild(project) {
  const { stdout, stderr } = await util.promisify(exec(`dotnet build ${project}`));
  console.log('stdout:', stdout);
  console.warn('stderr:', stderr);
}

function dotnetRun(project, sn) {
  console.log('executing console of ' + project);
  let child = spawn(`dotnet`, ['run', `-p`, `${ project }`]);
  let pid = child.pid;
  if (sn) {
    pids.push({
      sn: pid
    });
  }
  console.log(`executed console with pid ${pid}`);
  child.on('error', (err) => console.warn('error ' + err));
  child.on('close', (err) => console.log('closed with result' + err));
}

async function autoRest(url, ns, sn, kill) {
  const out = `${sn}-proxy.json`;
  const cmd = [
    `--namespace=${ns}`,
    `--csharp`,
    `--input-file=${out}`,
    `--output-folder="./Connected Services/${sn}"`,
    `--base-folder=.`,
    `--clear-output-folder`];
  // get proxy file from swagger def
  let json = '';
  getSwaggerDef = async url => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      return JSON.stringify(data);
    }
    catch (err) {
      console.warn(err);
    }
  };
  json = await getSwaggerDef(url);
  fs.writeFile(`${out}`, json, async (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`The file ${out} is saved`);
    const ar = exec(`autorest ${cmd.join(' ')}`);
    console.log(`autorest executed for ${sn} `);
    ar.on('message', msg => console.log(`msg ${msg}`));
    ar.on('error', (num, sgn) => console.log(`err ${num} ${sgn}`));
    ar.on('close', (sgn) => {
      console.log(`autorest done for ${sn} with result ${sgn} (0=ok, 1=err)`);
      // kill processes
      if (kill && pids.length) {
        console.log('killing current autorest process');
        spawn("taskkill", ["/pid", ar.pid, '/f', '/t']);
        console.log(`killing process for ${sn} with pid ` + filterValueFromKey(pids, sn));
        process.kill(filterValueFromKey(pids, sn));
      }
    });
  });
}

let args = process.argv;
if (args && args[2]) {
  let p = args[2];
  console.log(`Found parameter '${p}'`);
  switch (p) {
    case 'sa':
    case 'start-all':
      dotnetRun(projDesc.auth.path, projDesc.auth.sn);
      dotnetRun(projDesc.mdat.path, projDesc.mdat.sn);
      dotnetRun(projDesc.wfe.path);
      opn(projDesc.wfe.url);
      break;
    case 'sm':
    case 'start-ms':
      dotnetRun(projDesc.auth.path, projDesc.auth.sn);
      dotnetRun(projDesc.mdat.path, projDesc.mdat.sn);
      console.log('Done starting services');
      break;
    case 'ba':
    case 'build-all':
      dotnetBuild(projDesc.auth.path);
      dotnetBuild(projDesc.mdat.path);
      dotnetBuild(projDesc.wfe.path);
      break;
    case 'bm':
    case 'build-ms':
      dotnetBuild(projDesc.auth.path);
      dotnetBuild(projDesc.mdat.path);
      break;
    case 'bp':
    case 'build-proxy':
      console.log(`Run ${projDesc.auth.sn} service`);
      dotnetRun(projDesc.auth.path, projDesc.auth.sn);
      console.log(`Run ${projDesc.mdat.sn} service`);
      dotnetRun(projDesc.mdat.path, projDesc.mdat.sn);
      setTimeout(() => {
        console.log('Start building')
        autoRest(projDesc.auth.url, projDesc.auth.ns, projDesc.auth.sn, true);
        autoRest(projDesc.mdat.url, projDesc.mdat.ns, projDesc.mdat.sn, true);
      }, 10000);
      break;
    case 'bc':
    case 'build-client':

      break;
    case 'ib':
    case 'invoke-browser':
      dotnetRun(projDesc.wfe.path);
      setTimeout(() => {
        opn(projDesc.wfe.url); // Opens the url in the default browser
      }, 5000);
      break;
    default:
      console.warn('Found wrong parameter, use "start-all", "start-ms", "build-all", "build.ms", "build-proxy", "build-client", "invoke-browser".');
      break;
  }
} else {
  console.warn('Found no parameter, use "start-all", "start-ms", "build-all", "build.ms", "build-proxy", "build-client", "invoke-browser".');
}
console.log('Cancel process using ^C while running');
