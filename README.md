# Content

Multi tier application with ASP.NET Core WebAPI, WebAPI service layer and Entity Framework Core backend. The frontend is made with Angular 7.

Currently running ASP.NET Core 3.0 and EF 3.0 Core and build against Core 3.0 (Assemblys are .NET Standard 2.1).

## Usage

* Restore packages and build
* Run "TestConsole" app to create database
* Start the service layer - it runs on port 5001 by default
* Go to WebFrontEnd project's folder and execute `npm run build`
	* This creates the Angular app and the proxy from swagger data
* Now build the FrontEnd
* Start the front end - it's on port 5000 by default (or 8080 if run on docker, see below).

# Setup

## Settings

The connection string goes to (localdb)\JoergIsAGeek. You change this in Testconsole and ServiceLayers (micro services).

Create a DB instance on the console like that:

~~~
sqllocaldb create JoergIsAGeek
~~~

The WebFrontEnd has no direct DB access. Use docker to overcome manual settings and setup everything automatically, see below.

### API

The service layer exposes the API as OpenAPI 2 (f.k.a. Swagger). The frontend uses AutoRest to create the proxy. Changes require to recreate the proxy.

> Currently *autorest* does not support OpenAPI 3 fully. So we stay with v2 here.

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
