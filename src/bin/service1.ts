import http from 'http';
import { appService1 } from '../app';

const port = '8081';

appService1.set('port', port);

const server = http.createServer(appService1);

server.listen(port, () => {
  console.log(`Service - 1 is up and listening on port ${port}...`);
});
