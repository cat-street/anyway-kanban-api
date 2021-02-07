const fs = require('fs');
const path = require('path');

const getMockData = () => {
  const basePath = path.join(__dirname, '..', 'mocks', 'mock.json');
  return JSON.parse(fs.readFileSync(basePath, 'utf-8'));
};

const getData = async (_req, res, next) => {
  try {
    const data = await getMockData();
    res.send(data);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  const { id, task } = req.body;
  try {
    res.send({ id, task });
  } catch (err) {
    next(err);
  }
};

const startTask = async (req, res, next) => {
  const {
    id,
    date,
    status,
  } = req.body;
  try {
    res.send({ id, startDate: date, status });
  } catch (err) {
    next(err);
  }
};

const finishTask = async (req, res, next) => {
  const {
    id,
    date,
    status,
  } = req.body;
  try {
    res.send({ id, finishDate: date, status });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getData,
  createTask,
  startTask,
  finishTask,
};
