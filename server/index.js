const express = require('express');
const app = express();
const port = 3010;
const axios = require('axios');

app.use('/:projectId', express.static(__dirname + '/../client'));

app.get('/community/:projectId', (req, res) => {
  let projectId = req.params.projectId;

  axios.get(`http://localhost:3000/community/${projectId}`)
    .then(locations => {
      res.status(200).send(locations.data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});