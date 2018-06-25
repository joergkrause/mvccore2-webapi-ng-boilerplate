# Local Service
$url = "http://localhost:5001/swagger/v1/swagger.json"
# Temp File, because autorest can't read directly from service
$output = "$PSScriptRoot\proxy.json"
# Get the data
Invoke-WebRequest -Uri $url -OutFile $output
# Create the proxy in the 'Connected Services' folder
autorest --namespace=JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy --csharp --input-file=proxy.json --output-folder="Connected Services" --base-folder=. --clear-output-folder
