const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/product');
const User = require('./models/user');

const app = express();

// DB Config
dotenv.config();
const url = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Thing created successfully!',
  });
});

app.post('/api/products', (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  product
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Post saved successfully!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

app.use('/api/products', (req, res, next) => {
  const stuff = [
    {
      title: 'My first thing',
      price: 4900,
      quantity: 2,
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;
