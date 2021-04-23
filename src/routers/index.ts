import { Router } from 'express';
import { tasksRouter } from './tasks';
import { usersRouter } from './users';

const APIV1Router = Router();

APIV1Router.use('/tasks', tasksRouter);
// APIV1Router.use('/users', usersRouter);

export { APIV1Router };
