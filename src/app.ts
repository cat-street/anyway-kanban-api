const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Сервер запущен на порту: ${PORT}`);
});
