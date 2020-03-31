# Clear the target folder
Get-ChildItem -Path "Connected Services" -Include *.* -File -Recurse | foreach { $_.Delete()}
# Check tooling
if (Get-Command "nswag" -ErrorAction SilentlyContinue) 
{ 
  # Create a network to let containers talk to each other
  # the access is possible using the DNS name "sqlserver", so if the container has a different name you must adjust the connection string accordingly
  docker network create workshopnet
  # Start SQL Server (without volume, so storage is ephemarel)
  docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=p@ssw0rd" -p 1433:1433 -d --net workshopnet --name sqlserver microsoft/mssql-server-linux:latest  
  # create image
  docker build --tag authservice:1.0 -f DockerFile-Auth .
  # stop and remove 
  docker stop authservice
  docker rm authservice
  # Get the services meta data
  docker run

  # Create the proxies
  nswag openapi2csclient /input:Setup/Authentication-proxy-3.json /output:"Connected Services/AuthenticationService/ServiceProxy.cs" /namespace:JoergIsAGeek.ServiceProxy.Authentication
  nswag openapi2csclient /input:Setup/MachineData-proxy-3.json /output:"Connected Services/MachineDataService/ServiceProxy.cs" /namespace:JoergIsAGeek.ServiceProxy.MachineData
} else {
  Host-write "Nwsag is not properly installed. Follow instruction in README.md"
}
