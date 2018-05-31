# Content

Multi tier application with ASP.NET Core WebAPI, WebAPI service layer and Entity Framework backend.

Currently running ASP.NET Core 2.1 and EF 2.1 Core and build against .NET 4.7

## Usage

* Restore packages and build
* Run "TestConsole" app to create database
* Start the service layer - it runs on port 5000 by default
* Execute the script "CreateSwaggerAPIProxy.ps1" (needs running service to get API-JSON)
* Build FrontEnd
* Start the front end - it's on port 5001 by default

### Setup

## Settings

The connection string goes to (localdb)\MSSQLLocalDb. You change this in Testconsole and ServiceLayer.

The WebFrontEnd has no direct DB access.

### API

The service layer exposes the API as OpenAPI (f.k.a. Swagger). The frontend uses AutoRest to create the proxy. Changes require to recreate the proxy.


