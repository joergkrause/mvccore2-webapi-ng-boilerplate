# Content

Multi tier application with ASP.NET Core WebAPI, WebAPI service layer and Entity Framework Core backend. The frontend is made with Angular 9.

Currently running ASP.NET Core 3.1 and EF 3.1 Core and build against Core 3.1 (Assemblys are .NET Standard 2.1).

## Requirements

For Windows users this is your "must have":

* Windows 10
* Powershell
* Docker Community Edition 
* Visual Studio 2019
* .NET Core SDK 3.1

> I assume that your docker installation setup supports Linux containers. We don't need Windows here.

For Linux users, this is what you'll need:

* Ubuntu 16+ (recommended)
* Powershell Core for Linux
* Docker Community Edition 
* Visual Studio Code
* .NET Core SDK 3.1

## Usage (Overview)

The next sections below for details for each step.

* Restore packages and build
* Adjust connection strings for database
* Run "ConsoleApps/SetupConsole" app to create database
* Start the service layers - it runs on port 5001 (Authentication Service) and 5005 (Demo Service) by default
* Go to FrontEnd project's folder and execute `npm run build`
	* This creates the Angular app
* Now build the WebFrontEnd's API
	* The service layers can output their OpenAPI definition files, but these are included in the package for convenience.
* Start the front end API - it's on port 5000 by default.
* Start the front end host - it's on port 8080 by default. This requires CORS to be enabled.

# Setup

This section guides ypou through the elementary setup steps.

## Settings

The database environment needs a connection string. The test environment can make use of the SQLLocalDB, which comes with Visual Studio. 

### Windows (for VS Environment on Windows 10) and SQLLocalDB

The connection string goes to (localdb)\JoergIsAGeek. You must change this in SetupConsole and the ServiceLayers (micro services).

Create a DB instance on the console like that:

~~~
sqllocaldb create JoergIsAGeek
~~~

Locate the connection strings in the *appsettings.json* file, one for the setup and one for each service runtime. 

~~~
"ConnectionStrings": {
   "MachineDataContext": "Data Source=(localdb)\\JoergIsAGeek;Initial Catalog=MachineDataDatabase;Integrated Security=True;MultipleActiveResultSets=True;Connect Timeout=30"
}
~~~

* ____git-workspace____\Sources\MicroServices\Authentication\JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Authentication\appsettings.json
* ____git-workspace____\Sources\MicroServices\MachineData\JoergIsAGeek.Workshop.Enterprise.ServiceLayer.MachineData\appsettings.json
* ____git-workspace____\JoergIsAGeek.Workshop.Enterprise.SetupConsole\appsettings.json

The WebFrontEnd has no direct DB access. 

As an alternative way you can use a Docker container running MS SQL Server Developer Edition on Linux.

### Build Proxies

The WebAPI consumes two services. That demonstrates a Microservice approach. To have a CI/CD flow, the build process includes pulling of the OpenAPI 3 descriptions. This process includes these steps:

1. Clear the folder "Connected Services"
2. Check if NSwag is available in the path. Nwsag is the proxy generator. Pull from ____npm____ if not yet installed.
3. Create a docker image from *Dockerfile* available in the services root path.
4. Run this particular image
5. Execute a `Web-Get` to pull the OpenAPI (Swagger) file and place it in the *Setup* folder of the API project.
6. Repeat steps 3 to 5 for each service
7. Cal Nswag to create the proxies. That places the C# proxy files in the folder "Conntected Services"
8. Build the project. Run!

> The build script is using Powershell.
> See here: *Sources\WebApp\JoergIsAGeek.Workshop.Enterprise.WebApplication\BuildClientApp.ps1*

### Docker

There is a docker compose file that starts all parts in 5 containers:

1. SQL Server on Linux 
	- Run and Stay
2. DB Setup Console to have demo data
	- Run and Close
3. Authentication API 
	- Build
	- Run and Stay
4. Machine Data API (Demo Data)
	- Build
	- Run and Stay
5. Frontend App
	- Build
	- Run and Stay

After all is done, open a browser and point to http://localhost:8080. See chapter *Docker* below for details.

### API

The service layer exposes the API as OpenAPI 2 (f.k.a. Swagger, powered by NSwag). The frontend uses NSwag to create the proxy. 
Changes require to recreate the proxy. This is part of the build step.

# Docker Support

The projects are organized in sub folders. That's because the flat *.sln structure does not allow the existence of multiple *DockerFile* files. While renaming would be an option, the editor 
will not work properly with renamed *DockerFile* files. Hence, using sub folders is a solution. This would not be necessary if just a *docker_compose.yml* exists, but this is hard to debug if the 
complex single containers are not tested one by one.

## Container landscape

There are 4 containers:

* Linux with MSSQL 2017 for database --> Port 1433
* Linux with ASPNET Core for micro service 1 (Authentication) --> Port 5001
* Linux with ASPNET Core for micro service 2 (MachineData demo data) --> Port 5005
* Linux with ASPNET Core for web front end (Angular App) --> Port 5000, exposed externally as Port 8080

The composer file runs all of them in production mode. The final solution runs on http://localhost:8080 on your host system or any other external IP. The 500X ports are for inter-container communication only.

# Usage

There are three demo users and some demo data available. The 'TestConsole' app adds these data:

* Weird Guest (Login: weird@guest.com, Password: p@ssw0rd)
* Doris Demo (Login: doris@demo.com, Password: p@ssw0rd)
* Andy Admin (Login: andy@admin.com, Password: p@ssw0rd)

There are three roles defined, each role has one member, except "User", which has also the Admin as a member:

* Guest (Member: Weird Guest)
* User (Member: Doris Demo, Andy Admin)
* Admin (Member: Andy Admin)

There is one Policy as a User claim defined:

~~~
 { "role": "api_access" }
~~~

The members "Doris Demo" and "Andy Admin" have this claim.

Weird Guest has no claim and hence cannot access the backend API.

Login, Register and this Info page can be opened by all users. A Guard (in Angular) is protecting the dashboard from 
user not properly logged on. If you click on "Dashboard" as an anonymous user your're are going to be redirected 
to the login form.

The demo data is a shop floor definition, we have a machine, which has devices and these devices have values. Only the user 
in the Role "User" can access these data.

# Frontend

Currently on Angular 9.1. I will update this from time to time.


