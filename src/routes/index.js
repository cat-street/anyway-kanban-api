const router = require('express').Router();
const {
  getData, createTask, startTask, finishTask,
} = require('../controllers/kanban');
const NotFoundErr = require('../errors/not-found');

router.get('/kanban', getData);
router.post('/kanban', createTask);
router.patch('/kanban/start', startTask);
router.patch('/kanban/finish', finishTask);

router.all('*', () => {
  throw new NotFoundErr('Resource not found!');
});

module.exports = router;
