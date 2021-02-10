const express = require('express');
const path = require('path');
const debug = require('debug')('app');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Server listening on port ${port}`);
});
