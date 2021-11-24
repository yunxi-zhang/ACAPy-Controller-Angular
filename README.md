## Repo Description
This repo is mainly used to run as a frontend controller app that connects to a local Hyperledger ACA-Py agent.

## Prerequisites
1. OS: MacOS 11.6.1 (properly tested) or Unix/Linux(not properly tested yet).
2. node version: 14.18.1.
3. angular version: 12.2.13.
4. Docker Version: 20.10.8, build 3967b7d. Docker is optional, it is only needed when running ACA-Py agents in the same local machine of the frontend app is required.
5. Docker Compose Version: 1.29.2, build 5becea4c. Docker is also optional, it is only needed when running ACA-Py agents in the same local machine of the frontend app is required.

## Run the ACA-Py Agents in Azure VMs
Please follow [my blog series](https://yunxi-zhang-75627.medium.com/hyperledger-aries-aca-py-agents-setup-and-running-tutorials-part-i-hyperledger-indy-project-249591521e92) on how to set up ACA-Py agents in Azure.

## Run the ACA-Py Agents in A Local Machine
There are two approahces provided in this repo.
### Approach One - Run 3 Shell Scripts
3 seperate Shell scripts are provided in the folder named "acapy". Run them each in a separate terminal window is recommended, as this will give a clear log view for each of them.
1. Move to the right folder
```
cd ./acapy
```
2. Open a first terminal, and run the command to have an issuer agent 
```
./runIssuer.sh
```
3. Open a second terminal, and run the command to have an holder agent 
```
./runHolder.sh
```
4. Open a third terminal, and run the command to have an verifier agent 
```
./runVerifier.sh
```

### Approach Two - Run a docker compose file to have 3 agents to run in the same terminal window
1. Move to the right folder
```
cd ./acapy
```
2. Open a first terminal, and run the command to have 3 agents to run
```
docker-compose up
```

## Run the Frontend App
1. Move to the right folder
```
cd ./issuer
```
2. Run the command to install all dependencies
```
npm install
```
3. Run the command to run this app
```
npm start
```