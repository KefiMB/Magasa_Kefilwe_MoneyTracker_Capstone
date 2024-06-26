const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const TransactionSchema = new Schema(definition, {
    name: {type: String, required:true},
    name: {type: String, required:true},
    name: {type: String, required:true},
});

const TransactionModel = model('Transaction', TransactionSchema)

module.export = TransactionModel;