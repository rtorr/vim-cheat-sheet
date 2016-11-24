Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.hostname = "jekyll"
    config.vm.network "forwarded_port", host: 4000, guest: 4000
    config.vm.provision "shell", path: "scripts/bootstrap.sh", privileged: true
    config.vm.provision "shell", path: "scripts/run.sh", privileged: true, run: 'always'

    config.ssh.forward_agent = true
end