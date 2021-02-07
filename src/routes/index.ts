const router = require('express').Router();
const {
  getData, createTask, startTask, finishTask,
} = require('../controllers/kanban.ts');
const NotFoundErr = require('../errors/not-found.ts');

router.get('/kanban', getData);
router.post('/kanban', createTask);
router.patch('/kanban/start', startTask);
router.patch('/kanban/finish', finishTask);

router.all('*', () => {
  throw new NotFoundErr('Resource not found!');
});

module.exports = router;
