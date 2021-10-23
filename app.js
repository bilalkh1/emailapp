const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const businessRoutes = require("./routes/business-routes");
const categoryRoutes = require("./routes/category-routes");

const app = express();

app.use(express.static(path.join(__dirname, '/dist/mailing/browser')));

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());



// Cors
app.use(cors());


app.use('/api/businesses', businessRoutes);
app.use('/api/categories', categoryRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/mailing/browser', 'index.html'));
});


module.exports = app;