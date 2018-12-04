# Content

Multi tier application with ASP.NET Core WebAPI, WebAPI service layer and Entity Framework Core backend. The frontend is made with Angular 6.

Currently running ASP.NET Core 2.1 and EF 2.1 Core and build against .NET 4.7.

## Usage

* Restore packages and build
* Run "TestConsole" app to create database
* Start the service layer - it runs on port 5001 by default
* Go to WebFrontEnd project's folder and execute `npm run build`
	* This creates the Angular app and the proxy from swagger data
* Now build the FrontEnd
* Start the front end - it's on port 5000 by default

# Setup

## Settings

The connection string goes to (localdb)\MSSQLLocalDb. You change this in Testconsole and ServiceLayer.

The WebFrontEnd has no direct DB access.

### API

The service layer exposes the API as OpenAPI (f.k.a. Swagger). The frontend uses AutoRest to create the proxy. Changes require to recreate the proxy.


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
