const http = require('http');
const app = require('./app');
const dotenv = require("dotenv");

  const port = 3000;
  app.set('port', port);
  
  app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
  }); 

  // Load Config 
dotenv.config({ path: './config/config.env' });
