import express from 'express';

// nodemon --watch "src/**" --ext "ts" --exec "ts-node src/bin/service1.ts"
// {
//   "watch": ["src"],
//   "ext": ".ts,.js",
//   "ignore": [],
//   "exec": "ts-node ./src/bin/www.ts"
// }

import { connect } from './database';
import { APIV1Router } from './routers';

import accessChecker from './middleware/accessChecker';

import { authRouter } from './routers/auth';
import balancerMiddleware from './middleware/balancerMiddleware';
import * as validators from './middleware/validator';
import { createUser } from './controllers';

export const appService0 = express();
export const appService1 = express();
export const appService2 = express();
export const appService3 = express();

appService0.use(express.json());
appService1.use(express.json());
appService2.use(express.json());
appService3.use(express.json());

appService0.use('/', balancerMiddleware);

appService1.use('/auth', authRouter);
appService1.post('/users', validators.createUser, createUser);

appService2.use('/', accessChecker);
appService3.use('/', accessChecker);

appService2.use('/', APIV1Router);
appService3.use('/', APIV1Router);

connect();
