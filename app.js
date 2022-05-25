const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const businessRoutes = require("./routes/business-routes");
const categoryRoutes = require("./routes/category-routes");

const app = express();

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());



// Cors
app.use(cors());


app.use('/api/businesses', businessRoutes);
app.use('/api/categories', categoryRoutes);

module.exports = app;