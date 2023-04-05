const express = require('express');
const path = require('path');
const jokes = require('./controllers/jokes');
const products = require('./controllers/products');
const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3001; //usually use this port for dev
	

// Middleware
app
	.use(express.json())
	.use(express.static(path.join(__dirname, '../client/dist')))

	.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*')
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requsted-With, Content-Type, Accespt')
		res.header('Access-Control-Allow-Headers', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
		next()
	})

// Actions
app 
	.get('/api/v1', (req, res) => {
		res.send('Hello World! From Express')
	})
	.use('/api/v1/products', products)
	.use('/api/v1/jokes', jokes);

// Catch all
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

// Error handling
app
	.use((err, req, res, next) => {
		console.error(err);
		const msg = {
			status: err.code || 500,
			error: err.message || 'Internal Server Error',
			isSuccess: false
		}
		res.status(msg.status).json(msg)
	})

console.log('1: About to start server');


app.listen(port, () => {
  	console.log(`Server running at http://${hostname}:${port}/`); // backtik (`) allows you to place variables right in the string using ${variable} notation
});

console.log('3: Asked server to start');