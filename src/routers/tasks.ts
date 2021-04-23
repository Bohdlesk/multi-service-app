import { Router } from 'express';

import * as controllers from '../controllers/index';
import * as validators from '../middleware/validator/index';

const tasksRouter = Router();

tasksRouter.post('/', validators.createTask, controllers.createTask);
tasksRouter.get('/', validators.findByUserId, controllers.getTaskByUserId);
tasksRouter.get('/:_id', controllers.getTaskById);
tasksRouter.delete('/:_id', controllers.deleteTaskById);

export { tasksRouter };
