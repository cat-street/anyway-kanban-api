const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
// const cors = require('cors');

const routes = require('./routes/index.ts');

const app = express();
const { PORT = 3002 } = process.env;
const { errorHandler } = require('./middleware/error-handler.ts');

// app.use('*', cors());

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Сервер запущен на порту: ${PORT}`);
});
