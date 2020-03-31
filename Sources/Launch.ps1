# Create a network to let containers talk to each other
# the access is possible using the DNS name "sqlserver", so if the container has a different name you must adjust the connection string accordingly
docker network create workshopnet
  
# Start SQL Server (with volume, so storage is persistent), using local windows path "D:\sqlstoragewin"
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=p@ssw0rd" -p 1433:1433 -v D:\sqlstoragewin:/var/opt/mssql -d --net workshopnet --name sqlserver microsoft/mssql-server-linux:latest  

# Assume images exists locally from previous build step, if missing run "BuildClientApp.ps1" first
docker run -d -p 5001:5001 --net workshopnet --name authservice authservice:1.0 http://0.0.0.0:5001
docker run -d -p 5005:5005 --net workshopnet --name machinedataservice machinedataservice:1.0 http://0.0.0.0:5005

