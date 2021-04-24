import { Router } from 'express';
import { tasksRouter } from './tasks';

const APIV1Router = Router();

APIV1Router.use('/tasks', tasksRouter);

export { APIV1Router };
