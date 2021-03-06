import * as mongoose from 'mongoose';

const pessoaSchema = new mongoose.Schema({
    nome: {type: String},
    whatsapp: {type: String},
    email: {type: String},
    endereco: {type: String},
    createdAt: {type: Date, default: Date.now}
})

export default mongoose.model('pessoa', pessoaSchema);