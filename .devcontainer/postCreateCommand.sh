#!/bin/bash

wd=$(pwd)
cd /var/tmp
wget https://github.com/tinygo-org/tinygo/releases/download/v0.30.0/tinygo_0.30.0_arm64.deb
sudo dpkg -i tinygo_0.30.0_arm64.deb
rm -rf tinygo_0.30.0_arm64.deb
cd ${wd}
make install
