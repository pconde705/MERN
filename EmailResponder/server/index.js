// import express from 'express'; This syntax will be used for frontend not server side node
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

app.listen(5000);
