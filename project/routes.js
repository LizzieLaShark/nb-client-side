{
  "name": "nationbuilder-api-play",
  "version": "1.0.0",
  "description": "getting familiar with the nationbuilder api",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "build": "browserify -t hbsfy ./client/index.js -o ./public/js/bundle.js -dv",
    "watch": "watchify -t hbsfy ./client/index.js -o ./public/js/bundle.js -dv",
    "start-dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/LizzieLaShark/Nationbuilder-API-play.git"
  },
  "keywords": [
    "nationbuilder"
  ],
  "author": "LizzieLaShark",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/LizzieLaShark/Nationbuilder-API-play/issues"
  },
  "homepage": "https://github.com/LizzieLaShark/Nationbuilder-API-play#readme",
  "dependencies": {
    "dotenv": "^2.0.0",
    "express": "^4.14.0",
    "fs": "0.0.2",
    "handlebars": "^4.0.5",
    "hbs": "^4.0.0",
    "hbsfy": "^2.7.0",
    "jquery": "^3.1.0",
    "nationbuilder": "^1.0.8",
    "nodemon": "^1.9.2",
    "superagent": "^2.1.0",
    "xhr": "^2.2.2"
  },
  "devDependencies": {
    "hbsfy": "^2.7.0",
    "himalaya": "^0.2.0",
    "uglifyify": "^3.0.2"
  }
}
