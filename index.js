const express = require('express');


const app = express();

app.use('/', (req, res) => {
  res.send('Working');
});

app.listen(5000);