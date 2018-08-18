# Local Service
$port = 5001
$url = "http://localhost:${port}/swagger/v1/swagger.json"
# Temp File, because autorest can't read directly from service
$output = "$PSScriptRoot\proxy.json"
# Test APP server
if (Test-NetConnection -ComputerName localhost -Port $port -InformationLevel Quiet) {
  Write-Host "Backend Service is listing in Port ${port}"
  # Get the data
  Invoke-WebRequest -Uri $url -OutFile $output
  # Create the proxy in the 'Connected Services' folder
  autorest --namespace=JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy --csharp --input-file=proxy.json --output-folder="Connected Services" --base-folder=. --clear-output-folder
} else {
  Write-Host "Backend Service is not listing, please start service."
  #$appServer = Start-Process "../JoergIsAGeek.Workshop.Enterprise.Servicelayer/bin/debug/net47/JoergIsAGeek.Workshop.Enterprise.ServiceLayer.exe" -NoNewWindow 
}
