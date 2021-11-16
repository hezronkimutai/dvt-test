#!/bin/sh

sudo npm install -g n
sudo n stable
sudo npm install -g @angular/cli
npm i
ng test --browsers=ChromeHeadless --watch=false