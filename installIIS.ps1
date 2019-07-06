Import-Module servermanager


$permission = Read-Host -Prompt 'Do you want to proceed installation of IIS (Web-Server)  [y] Yes [n] No'

if ($permission -eq "y" -or  $permission -eq "Y"){
	$IISFeature = (Get-WindowsFeature -Name "Web-Server")
	if ($IISFeature.Installed -eq $false){
		Install-WindowsFeature -Name "Web-Server"
	}else{
		Write-output "IIS (Web-Server) is already installed"
		$feature = Read-Host -Prompt 'Please enter a name of another feature.'
		$permission = Read-Host -Prompt 'Do you want to proceed installation of $feature  [y] Yes [n] No'
		if ($permission -eq "y" -or  $permission -eq "Y"){
			Install-WindowsFeature -Name $feature
		}
	}
}
 