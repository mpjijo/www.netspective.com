---
title: LUKS volume over LVM
author: Shahid N. Shah
type: post
date: 2012-09-25T10:21:24+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/luks-volume-over-lvm/
post_private:
  - 'a:1:{i:0;s:8:"Required";}'
categories:
  - IT Infrastructure SOPs

---
### Setup LUKS over LVM

    sudo aptitude install cryptsetup-luks ##Installing LUKS under Ubuntu
    apt-get install lvm2     ##Install LVM
    

Create one 5G files corresponding to physical volumes:

    sudo dd if=/dev/zero of=/pv00.luks bs=1M count=0 seek=5000
    ls -l /pv*.luks
    

Attach all of them to loopback devices:

    sudo losetup /dev/loop0 /pv00.luks
    losetup -a
    

Setup all devices as LUKS volumes (answer all prompts):

    sudo cryptsetup luksFormat /dev/loop0
    

Open all LUKS devices:

    sudo cryptsetup luksOpen /dev/loop0 pv00.luks.device
    

Create LVM Physical Volumes from each LUKS device:

    sudo pvcreate /dev/mapper/pv00.luks.device
    pvdisplay
    

Create LVM Volume Group from all LUKS PVs:

    sudo vgcreate vg0 /dev/mapper/pv00.luks.device
    vgdisplay
    

Carve out a LVM Logical Volume from the vg0 Volume Group:

    sudo lvcreate --size 4800M --name mysql-data vg0
    lvdisplay
    

Format and mount the data Logical Volume with whatever filesystem you choose:

    sudo mkfs.ext4 /dev/vg0/mysql-data
    sudo mount /dev/vg0/mysql-data /var/lib/mysql

At the end of all this, mysql will contain a filesystem that can be expanded by adding more LUKS volumes to the mix.

For automatic mount LUKS volume after rebooting need to run the following perl script:

    /root/umount-lvm-over-luks.pl --logical-volume mysql-data --volume-group vg0 --mount-point /var/lib/mysql /pv00.luks
    /root/mount-lvm-over-luks.pl --logical-volume mysql-data --volume-group vg0 --mount-point /var/lib/mysql /pv00.luks
    

[Pearl Scripts][3]

 [3]: https://www.netspective.com/wp-content/uploads/2012/09/LUKS-volume-over-LVM.zip