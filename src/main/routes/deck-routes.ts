import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeAddDeckController } from '@/main/factories';

export default (router: Router): void => {
  router.post('/decks/add', adaptRoute(makeAddDeckController()));
};
