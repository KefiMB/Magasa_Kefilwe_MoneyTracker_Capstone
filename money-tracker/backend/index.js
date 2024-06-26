const express = require('express');
const cors = require('cors');
const app = express();
 
app.use(cors());
app.use(express.json());
app.get('/backend/test', (req, res))
app.post({path:'/backend/transaction'} (req, res),
res.json(req.body));
    const {name, description, datetime} = res.body
const PORT = 4040

	app.listen (PORT, () => {
		console.log("Is it working?")
	});
