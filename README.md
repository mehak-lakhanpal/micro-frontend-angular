
# Project Title

This project has is based on insurance app where user can see insurance details and pay premium.
There are 3 microfrontends - 
* Angular-mfe - Its a container or shell app in which have 2 MFEs . This application just shows available insurances.
* Remoteapp1 mfe - When user clicks on particular insurance to view details that will be routed to this application.
* Remoteapp2 mfe - When user clicks on pay premium , then he will be routed to this application for paying premium.


## How to run this project locally

First you need to run below cmd to install packages to each MFE.
```
npm install
```

Then you can start these spring boot application by running below cmd-
```
ng serve
```

* Angular-mfe is running on "4200" port.
* Remoteapp1 mfe is running on "5000" port.
* Remoteapp2 mfe is running on "5001" port.


### Deployment on Netlify website-
* 
