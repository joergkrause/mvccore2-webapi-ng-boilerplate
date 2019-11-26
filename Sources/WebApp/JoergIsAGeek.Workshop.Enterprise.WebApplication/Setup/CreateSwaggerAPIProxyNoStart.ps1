$machineName = 'localhost';
# endpoints
$serviceUrls = @{
  "Authentication"="Authentication-proxy-3.json";
  "MachineData"="MachineData-proxy-3.json"
}
# Test APP server
# prepare auth of backend (currently, the swagger meta data is not being protected)
$user = "ProxyUser" # not checked
$pass = "p@ssw0rd"  # this IS checked once activated
$secpasswd = ConvertTo-SecureString $pass -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential($user, $secpasswd)
# Get the data
$serviceUrls.Keys | % { 
    $url = $serviceUrls.Item($_)
    # Create the proxy in the 'Connected Services' folder
    autorest --namespace=JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.$_ --csharp --input-file=$url --output-folder="./Connected Services/$_" --base-folder=. --clear-output-folder
  }
