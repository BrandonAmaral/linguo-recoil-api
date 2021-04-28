import { AddDeck } from '../usecases';

import faker from 'faker';

export const mockAddDeckParams = (): AddDeck.Params => ({
  name: faker.random.words(),
  isPublic: true,
  createdAt: new Date(),
  modifiedAt: new Date(),
});
