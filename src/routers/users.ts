import { Router } from 'express';

import * as controllers from '../controllers/index';

const usersRouter = Router();

usersRouter.post('/', controllers.createUser);

export { usersRouter };
