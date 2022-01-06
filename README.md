## Repo Description
This repo is mainly used to run as a frontend controller app that connects to a local Hyperledger ACA-Py agent. It's based on the alice-controller Angular app in [Hyperledger's aries-acapy-controllers repo](https://github.com/hyperledger/aries-acapy-controllers/tree/main/AliceFaberAcmeDemo/controllers).

## Prerequisites
1. OS: MacOS 11.6.1 (properly tested) or Unix/Linux(not properly tested yet).
2. Node version: 14.18.1.
3. Angular version: 12.2.13.
4. Docker Version: 20.10.8, build 3967b7d. Docker is optional, it is only needed when running ACA-Py agents in the same local machine of the frontend app is required.
5. Docker Compose Version: 1.29.2, build 5becea4c. Docker is also optional, it is only needed when running ACA-Py agents in the same local machine of the frontend app is required.

## ACA-Py Compatible Version
Currently, this repo is only tested against ACA-Py <b>V0.6.0</b> for a simple happy path. This includes: 
1. An issuer user can create/view a new credential schema/definition. 
2. Connections can be established between any 2 of 3 agents. 
3. A holder user can request a credential by starting with a credential request step. 
4. An issuer user can approve and issue a credential. 
5. An holder user can store an issued credential to his/her wallet.
6. A verifier user can request a proof request. 
7. An holder user can choose credentials to give a proof presentation and (8) A verifier user can verify a proof. <br>

There're issues of using this frontend app when it's tested against ACA-Py <b>V0.7.0</b> and above, and it will fail when a holder user sends a proof presentation. 

## Repo Structure
<pre>
|__ <b>acapy</b>: This folder contains all shell scripts to set up 3 ACA-Py agents with version 0.6.0.
|__ <b>agent-specifc</b>: This folder contains some frontend pages customised for an holder and a verifier.
|__ <b>agent</b>: This folder contains all the frontend app files.
|__ <b>common.sh</b>: This shell script defines the styling of information printed out. It is used by other shell script files.
|__ <b>setup-agent.sh</b>: This shell script will auto create 3 frontend apps for an issuer, a holder and a verifier respectively.
</pre>

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

As the issuer agent connects to Sovrin's BuilderNet, for the first time connection, it requires a manual interaction to approve Transaction Author Agreement (TAA). A user only needs to press the "Enter" key to choose the default option as all these options proivision the same functionalities from a technical perspective. 

### Approach 2 - Run a docker compose file to have 3 agents to run in the same terminal window (as no ledger is configured in the docker compose file, only for the purpose of testing agent-level interaction)
By default, the 3 agents are not connecting to any Indy DLT networks. This approach is only used for testing the inter communication between agents only. 
1. Move to the right folder
```
cd ./acapy
```
2. Open a first terminal, and run the command to have 3 agents to run
```
docker-compose up
```

## Run A Indy Tails Server as Credential Revocation Registry
The Indy tails server is a docker image built based on the offical Indy tails server's docker file and pushed to my personal docker hub account. It uses the docker's built-in bridge network that will habe the 3 ACA-Py agents together. It is assumed this Indy tails server will run with a docker IP:172.17.0.5, which is hardcoded in the runIssuer.sh file for running an Issuer agent.<br>

Run the command to set up a indy tails server.
```
./acapy/runIndyTailsServer.sh
```

## Run the Frontend App
The agent folder contains all the files used for a forntend app. It is used as a template folder to set up all 3 frontend apps for issuer, holder and verifier respectively. A shell script file named "setup-agent.sh" is provioned to auto set up 3 frontend apps. For windows users, one has to either manually follow the commands or create a bat file unfortunately. The 3 frontend apps have been configured to auto open a new browser to show each Web UI when it's ready, which normally takes around 1 minute.
1. Run setup-agent.sh
```
./setup-agent.sh

```
Below shows the port numbers used for each frontend app.
| Frontend App | Frontend Port |  
| ----------- | ----------- | 
| Issuer |  4000 |
| Holder | 4001 |
| Verifier | 4002 |