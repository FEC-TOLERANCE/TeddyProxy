const express = require('express');
const app = express();
const port = 3010;
const axios = require('axios');

app.use('/:projectId', express.static(__dirname + '/../client'));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});