const express = require('express');
const app = express();
 
app.get('/backend/test', (req, res))
app.post({path:'/backend/transaction'} (req, res)
    res.json(req.body);
));
const PORT = 4040

	app.listen (PORT, () => {
		console.log("Is it working?")
	});
