import { Controller } from '@/presentation/protocols';
import { AddDeckController } from '@/presentation/controllers';
import { makeAddDeck, makeAddDeckValidation } from '@/main/factories';

export const makeAddDeckController = (): Controller => {
  return new AddDeckController(makeAddDeck(), makeAddDeckValidation());
};
