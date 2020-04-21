### Log running processes
ps -ef

### Add user to group
sudo usermod -a -G group_name username_name

### Where command is placed
type -a command_name

### Give user rwx access to folder
setfacl -m u:jenkins:rwx /home/ubuntu/hive

### Look available disks
fdisk -l
