import http from 'http';
import { appService2 } from '../app';

const port = '8082';

appService2.set('port', port);

const server = http.createServer(appService2);

server.listen(port, () => {
  console.log(`Service - 2 is up and listening on port ${port}...`);
});
