import { Request, Response, NextFunction } from 'express';

const fs = require('fs');
const path = require('path');

const getMockData = (): object => {
  const basePath: string = path.join(__dirname, '..', 'mocks', 'mock.json');
  return JSON.parse(fs.readFileSync(basePath, 'utf-8'));
};

const getData = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getMockData();
    res.send(data);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req: Request, res: Response, next: NextFunction) => {
  const { id, task }: { id: string; task: string } = req.body;
  try {
    res.send({ id, task });
  } catch (err) {
    next(err);
  }
};

const startTask = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id,
    date,
    status,
  }: { id: string; date: string; status: string } = req.body;
  try {
    res.send({ id, startDate: date, status });
  } catch (err) {
    next(err);
  }
};

const finishTask = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id,
    date,
    status,
  }: { id: string; date: string; status: string } = req.body;
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
