// import express from 'express'; This syntax will be used for frontend not server side node
const express = require('express');
require('./services/passport') // because we're not exporting anything from passport.js you can write it like this

const app = express();

require('./routes/authRoutes.js')(app); // we require the function and then immediately invokes the app function
// doesn't have to be written like this, its simply refactoring. 

const PORT = process.env.PORT || 5000;
app.listen(PORT);
