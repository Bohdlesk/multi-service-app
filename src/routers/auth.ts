import { Router } from 'express';

import * as controllers from '../controllers/index';

const authRouter = Router();

authRouter.get('/', controllers.getAuthToken);

export { authRouter };
