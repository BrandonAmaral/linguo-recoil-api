import { cors } from '@/main/middlewares';

import { Express } from 'express';

export default (app: Express): void => {
  app.use(cors);
};