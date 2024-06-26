const express = require('express');
const cors = require('cors');
require('dotenv').config();
const transaction = require('./models/transaction');
const app = express();
 
app.use(cors());
app.use(express.json());
app.get('/backend/test', (req, res));
app.post({path:'/backend/transaction'} (req, res),

await mongoose.connect(process.env.MONGO_URL));

const transaction = await Transaction.create({
    name, description, datetime, price
});
 
req.json(transaction);
app.get('backend/transaction', async (req, res));
await mongoose.connect(process.env.MONGO_URL);
const transactions = await Trsansaction.find()
res.json(transactions);
    const {name, description, datetime} = req.body
const PORT = 4040

	app.listen (PORT, () => {
		console.log("Is it working?")
	});
