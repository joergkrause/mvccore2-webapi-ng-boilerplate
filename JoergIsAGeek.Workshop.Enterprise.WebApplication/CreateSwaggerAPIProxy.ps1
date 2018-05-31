$url = "http://localhost:5000/swagger/v1/swagger.json"
$output = "$PSScriptRoot\proxy.json"
Invoke-WebRequest -Uri $url -OutFile $output
autorest --namespace=JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy --csharp --input-file=proxy.json --output-folder="Connected Services" --base-folder=. --clear-output-folder
