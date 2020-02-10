**[INFO]** *This repository is intended only to store the code, all the credits are to [RocketSeat](https://rocketseat.com.br/)©.*

# 🚀 Omnistack 10.0 week

This project was based on the Omnistack 10, from  **[RocketSeat](https://github.com/Rocketseat/semana-omnistack-10)**. The project, *DevRadar*, consists of an app that aims to connect developers around you, based on programming language and geolocation.

Feel free to suggest improvements and new features. :smile:

 ## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Firstly, you will need to install:

* [GitHub cli](https://gist.github.com/derhuerst/1b15ff4652a867391f03) :octocat:

* [Node.js](https://nodejs.org/en/download/) 🚀

* [Docker](https://docs.docker.com/v17.09/engine/installation/#server) 🐳

### Installing

A step by step that will guide you on how to run the project on your computer.

Clone the project repository:
```
$ git clone https://github.com/guilhermelionzo/devFind-omnistack.git
```

Go to the backend directory:
```
$ cd backend
```

Create the backend container:

```
$ docker build -t devfinder_backend .
```

Run the container on the port 3333:
```
$ docker run -p 3333:3333 -d devfinder_backend
```

Run the command bellow to make sure the application 'devfinder_backend' is running: 
```
$ docker ps
```

Now go to the ***web directory*** and repeaty the same steps, changing ```devfinder_backend``` to ```devfinder_web```. After that, the webpage content will be running in the ***devfinder_web*** container.

## 🔨Built With

* [Node.js](https://nodejs.org/en/download/) - JavaScript interpreter
* [Express](https://expressjs.com/) - Web framework
* [Docker](https://www.docker.com/) - Container environment
* [React](https://www.docker.com/) - Container environment
* [React Native](https://www.docker.com/) - Container environment
* [Expo](https://www.docker.com/) - Container environment

## 📃License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
