import express from 'express';

import * as fs from 'fs';
import * as swaggerUi from 'swagger-ui-express';

import routes from './routes';

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());    
  }

  routes() {
    this.server.use('/v1', routes);
    const swaggerFile: any = './swagger.json';
    const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
    const swaggerDocument = JSON.parse(swaggerData);
    this.server.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

export default new App().server;
