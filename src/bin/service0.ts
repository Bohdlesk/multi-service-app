import http from 'http';
import { appService0 } from '../app';

const port = process.env.PORT || '3000';
appService0.set('port', port);

const server = http.createServer(appService0);

server.listen(port, () => {
  console.log(`Service - 0 is up and listening on port ${port}...`);
});
