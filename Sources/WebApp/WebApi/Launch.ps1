# Create a network to let containers talk to each other
# the access is possible using the DNS name "sqlserver", so if the container has a different name you must adjust the connection string accordingly
docker network create workshopnet
  
# Start SQL Server (with volume, so storage is persistent)
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=p@ssw0rd" -p 1433:1433 -v sqlstoragewin:/var/opt/mssql -d --net workshopnet --name sqlserver microsoft/mssql-server-linux:latest  

