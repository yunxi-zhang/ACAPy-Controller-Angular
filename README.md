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
### Approach 1 - Run 3 Shell Scripts
3 seperate Shell scripts are provided in the folder named "acapy". Run them each in a separate terminal window is recommended, as this will give a clear log view for each of them. <br>
The 3 agents will use the docker "bridge" network by default and hardcoded container-level IPs for each. The IPs should correspond to the running containers if one runs them in the right order; otherwise, the user has to update these IPs to correspond to the real IPs used in the running containers.<br>
By default, the issuer uses the Sovrin's BuilderNet (a Dev Indy DLT network), so a user doesn't need to run a local Indy DLT (e.g. VON-Network) in the same local machine. However, in order to enable the credential revocation, a user still needs to run a seperate tails-file server in the same machine or somewhere else that can be accessed by the ACA-Py agents.
| Agent      | Container IP | Agent Level Communication Port | Admin(REST API) Port |
| ----------- | ----------- | ----------- | ----------- |
| Issuer | 172.17.0.2 | 7000 | 7001 |
| Holder | 172.17.0.3 | 8000 | 8001 |
| Verifier | 172.17.0.4 | 9000 | 9001 |

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

### Approach 2 - Run a docker compose file to have 3 agents to run in the same terminal window
By default, the 3 agents are not connecting to any Indy DLT networks. This approach is only used for testing the inter communication between agents only. 
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