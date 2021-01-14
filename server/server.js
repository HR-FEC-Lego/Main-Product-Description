const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve('client', 'dist')));

app.listen(port, () => {
  console.log(`Main Product Detail-Sever is listening at http://localhost:${port}`);
});
