import express from 'express';
import routes from './routes';
import DataBase from '../db';
const bodyParser = require('body-parser');

class App {
    constructor(){
        this.server = express();
        this.databse = new DataBase();
        this.databse.createConnection();
        this.middlewares()
        this.routes()

    }

    middlewares() {
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(bodyParser.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default  new App().server;