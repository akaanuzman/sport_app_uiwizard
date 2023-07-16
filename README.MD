# 💻 Sport App Rest API

## 📁 Description
Hello everyone! This project is referenced to [this](https://github.com/HardwareAndro/sport_app_uiwizard/issues/2) issue. The project was written in node.js and with MongoDB Database.

## 🚀 Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Create MongoDb Cluster and Get Connection MongoDb URI
- Set environment variables in `config.env` under `./config/env`
  * Set `PORT = <YOUR_PORT>`
  * Set `MONGO_URI = <YOUR_MONGO_URI>`
  * Set `JWT_SECRET_KEY = <YOUR_SECRET_KEY>`
  * Set `JWT_EXPIRE = <YOUR_JWT_EXPIRE_TIME>`

- `npm start` to start the local server
