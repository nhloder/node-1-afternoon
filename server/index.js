const express = require('express');
const getProducts = require('./getProducts')
const getProduct= require('./getProduct')
const app = express();

const port = 4001

app.get('/api/products', getProducts)

app.listen (port, () => {
    console.log(`server listening on port ${port}`);
});

app.get('/api/product/:id',getProduct)