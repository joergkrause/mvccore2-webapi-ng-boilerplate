# prepare image
docker rm setupconsole && docker rmi --force setupconsole && docker build --tag setupconsole -f Dockerfile-SetupConsole .
# Create a network to let containers talk to each other
# the access is possible using the DNS name "sqlserver", so if the container has a different name you must adjust the connection string accordingly
$nets = (docker network ls)
$findnet = [Array]::Find($nets, [Predicate[string]]{ $args[0].Contains("workshopnet") })
if ($findnet.Count -eq 0) {
  docker network create workshopnet
} else {
  Write-Host 'Network "workshopnet" already exists'
}
# check if container already exists
$containers = (docker container ls -a --filter=name=sqlserver)
# start sql image if not exists
$findsql = [Array]::Find($containers, [Predicate[string]]{ $args[0].Contains("sqlserver") })
if ($findsql.Count -eq 0) {
  docker run -e "ACCEPT_EULA=Y" `
              -e "SA_PASSWORD=p@ssw0rd" `
              -p 1433:1433 `
              -v D:\sqlstoragewin:/var/opt/mssql `
              -d --net workshopnet --name sqlserver `
              microsoft/mssql-server-linux:latest  
} else {
  docker start sqlserver
} 
# Start SQL Server (with volume, so storage is persistent), using local windows path "D:\sqlstoragewin"
$containers = (docker container ls -a --filter=name=setupconsole)
$findsetup = [Array]::Find($containers, [Predicate[string]]{ $args[0].Contains("setupconsole") })
Write-host "find $findsetup"
if ($findsetup.Count -eq 0) {
  docker run -e WORKSHOP_ConnectionString_MachineDataContext="Data Source=sqlserver,1433;Initial Catalog=MachineDataDatabase;User ID=sa;Password=p@ssw0rd;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False" `
             -i --net workshopnet --name setupconsole `
             setupconsole
} else {
  docker start -i setupconsole
}

# Assume images exists locally from previous build step, if missing run "BuildClientApp.ps1" first
#docker run -d --net workshopnet --name authservice authservice:1.0 http://0.0.0.0:5001
#docker run -d --net workshopnet --name machinedataservice machinedataservice:1.0 http://0.0.0.0:5005

#docker run -d -p 5000:5000 --net workshopnet --name webapp webapp:1.0 http://0.0.0.0:5000