# use the lightest version of node
FROM node:alpine    

# directory on the host machine
WORKDIR /usr/devfinder/backend

#copy 'package.json' and 'package-lock.json' to /usr/app
COPY package*.json  /usr/devfinder/backend
COPY *.lock  /usr/devfinder/backend

#install the all the node dependencies
RUN yarn

#Copy all files, except the .dockerignore files
COPY . /usr/devfinder/backend

#open application on port 3333
EXPOSE 3333

CMD [ "yarn", "dev" ]

#deploy: 
#docker build -t devfinder_backend .
#run:
#docker run -p 3333:3333 -d devfinder_backend
#see the applications:
#docker ps