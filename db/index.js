import mongoose from 'mongoose';

class DataBase {

    constructor() {
        this.dburl = 'mongodb://127.0.0.1/apiPessoa';
    }

    createConnection() {
        mongoose.connect('mongodb://127.0.0.1/apiPessoa');
        this.logger(this.dburl)
    }

    logger(url) {
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('mongoose connected...'));
        this.dbconnection.on('error', error => console.error.bind(console, 'connection error' + error));
    }
}

export default DataBase;