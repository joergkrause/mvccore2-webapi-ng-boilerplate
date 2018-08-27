$machineName = 'localhost';
# Local Service start
$exe = "JoergIsAGeek.Workshop.Enterprise.ServiceLayer.exe"
$serviceExecutables = @{
  "Authentication"="JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Authentication\bin\Debug\net47\$exe";
  "MachineData"="JoergIsAGeek.Workshop.Enterprise.ServiceLayer.MachineData\bin\Debug\net47\$exe"
}
$serviceExecutables | % { Start-Process $serviceExecutables($_) -NoNewWindow }
# endpoints
$serviceUrls = @{
  "Authentication"="http://$machineName:5001/swagger/v1/swagger.json";
  "MachineData"="http://$machineName:5005/swagger/v1/swagger.json"
}
$testAuth = Test-NetConnection -ComputerName $machineName -Port 5001 -InformationLevel Quiet
$testMach = Test-NetConnection -ComputerName $machineName -Port 5005 -InformationLevel Quiet
# Test APP server
if ($testAuth -and $testMach) {
  Write-Host "Backend Services are listing"
  # prepare auth of backend (currently, the swagger meta data is not being protected)
  $user = "ProxyUser" # not checked
  $pass = "p@ssw0rd"  # this IS checked once activated
  $secpasswd = ConvertTo-SecureString $pass -AsPlainText -Force
  $credential = New-Object System.Management.Automation.PSCredential($user, $secpasswd)
  # Get the data
  $serviceUrls.Keys | % { 
      $url = $serviceUrls.Item($_)
      $outfile = "$_-proxy.json"
      Invoke-WebRequest -Uri $url -OutFile $output -Credential $credential
      # Create the proxy in the 'Connected Services' folder
      autorest --namespace=JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.$_ --csharp --input-file=$outfile --output-folder="Connected Services" --base-folder=. --clear-output-folder
   }
} else {
  Write-Host "Backend Service is not listing, please start service."
}
