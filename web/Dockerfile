# use the lightest version of node
FROM node:alpine    

# directory on the host machine
WORKDIR /usr/devfinder/web

#copy 'package.json' and 'package-lock.json' to /usr/app
COPY package*.json /usr/devfinder/web
COPY yarn.lock /usr/devfinder/web
#install the all the node dependencies
RUN yarn

#Copy all files, except the .dockerignore files
COPY . /usr/devfinder/web

#open application on port 3333
EXPOSE 3000

CMD ["yarn", "start"]

#deploy: 
#docker build -t devfinder_web .
#run:
#docker run -p 3000:3000 -d devfinder_web
#see the applications:
#docker ps