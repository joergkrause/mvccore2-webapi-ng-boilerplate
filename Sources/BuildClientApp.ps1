Function Remove-DockerContainers
{
    # save containers ids into array (--quiet mean return just containers ids)
    $containersIds = (docker ps --all --quiet); 
    if ($containersIds.Count -gt 0)
    {
        Write-Host ("removing docker containers: ")
        # stop all containers
        docker stop $containersIds
        # remove all containers
        docker rm $containersIds
    }
}
Function Remove-DockerImage
{
    Param (
        [Parameter(Mandatory=$True)]
        [string]$DockerImage
    )
    # try find image(s) by name
    $selectedDockerImages = (docker images --all $DockerImage --quiet)
    if ($selectedDockerImages.Count -gt 0) 
    {
        # remove image(s)
        docker rmi $DockerImage
        Write-Host ($DockerImage + " image was removed") -ForegroundColor Green
    } else {
        # show mesage that docker image does not exist
        Write-Host ($DockerImage + " image not exists")  -ForegroundColor Red
    }
} 
Function Remove-DockerImages
{
    Param (
        [Parameter(Mandatory=$True)]
        [string[]]$DockerImages
    )
    Write-Host ("removing docker images: ")
    foreach ($DockerImage in $DockerImages)
    {
        Remove-DockerImage -DockerImage $DockerImage
    }
}

# Clear the target folder
# Check tooling
if (Get-Command "nswag" -ErrorAction SilentlyContinue) 
{ 
  # Create a network to let containers talk to each other
  # the access is possible using the DNS name "sqlserver", so if the container has a different name you must adjust the connection string accordingly
  $nets = (docker network ls)
  $findnet = [Array]::Find($nets, [Predicate[string]]{ $args[0].Contains("workshopnet") })
  if ($findnet.Length = 0) {
    docker network create workshopnet
  }
  # Start SQL Server (without volume, so storage is ephemarel)
  docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=p@ssw0rd" -p 1433:1433 -d --net workshopnet --name sqlserver microsoft/mssql-server-linux:latest  
  $findimgs = (docker images --filter=reference='*service:1.0')
  # create image if not exists
  if (([Array]::Find($findimgs, [Predicate[string]]{ $args[0].Contains("authservice") })).Length > 0) {
    docker rmi authservice:1.0
    docker build --tag authservice:1.0 -f DockerFile-Auth .
  }
  # create image if not exists
  if ([Array]::Find($findimgs, [Predicate[string]]{ $args[0].Contains("machinedataservice") })).Length > 0) {
    docker rmi machinedataservice:1.0
    docker build --tag machinedataservice:1.0 -f DockerFile-MachineData .
  }
  # stop and remove (and ignore warnings)
  docker stop authservice
  docker rm authservice
  docker stop machinedataservice
  docker rm machinedataservice
  # start the containers
  docker run -d -p 5001:5001 --net workshopnet --name authservice authservice:1.0 http://0.0.0.0:5001
  docker run -d -p 5005:5005 --net workshopnet --name machinedataservice machinedataservice:1.0 http://0.0.0.0:5005
  # Get the services meta data
  Invoke-Webrequest -uri http://localhost:5001/swagger/v1/swagger.json -outfile "WebApp/WebApi/Setup/Authentication-proxy-3.json"
  Invoke-Webrequest -uri http://localhost:5005/swagger/v1/swagger.json -outfile "WebApp/WebApi/Setup/MachineData-proxy-3.json"
  # Got to target project
  cd WebApp/WebApi/
  # Create the proxies
  Get-ChildItem -Path "Connected Services" -Include *.* -File -Recurse | foreach { $_.Delete()}
  nswag openapi2csclient /input:Setup/Authentication-proxy-3.json /output:"Connected Services/AuthenticationService/ServiceProxy.cs" /namespace:JoergIsAGeek.ServiceProxy.Authentication
  nswag openapi2csclient /input:Setup/MachineData-proxy-3.json /output:"Connected Services/MachineDataService/ServiceProxy.cs" /namespace:JoergIsAGeek.ServiceProxy.MachineData
  # Stop and remove services
  docker stop authservice
  docker rm authservice
  docker stop machinedataservice
  docker rm machinedataservice
  # back to root
  cd ../..
  # Build Angular
  cd WebApp/FrontEnd
  npm i
  npm run build
  cd ../..
  # 
  docker build --tag webapp:1.0 .

} else {
  Host-write "Nwsag is not properly installed. Follow instruction in README.md"
}
