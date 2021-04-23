import http from 'http';
import { appService3 } from '../app';

const port = '8083';

appService3.set('port', port);

const server = http.createServer(appService3);

server.listen(port, () => {
  console.log(`Service - 3 is up and listening on port ${port}...`);
});
