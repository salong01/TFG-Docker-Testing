#Indicate the source of the app
FROM node:12.13.1-alpine

#install http server for our static content
#RUN npm install -g http-server
#create directory in which we will copy all files
RUN mkdir docker-testing

# copy 'package.json' and 'package-lock.json' files in current directory
COPY package.json /docker-testing

# go to workspace 'docker-testing' to make the current working directory 
WORKDIR /docker-testing

# install project dependencies
RUN npm install
RUN npm install -g @angular/cli

# copy all project files and directories into current directory
COPY . .

# build application
RUN npm run build

#run application
CMD ng serve --host 0.0.0.0