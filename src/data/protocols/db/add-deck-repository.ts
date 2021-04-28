import { AddDeck } from '@/domain/usecases';

export interface AddDeckRepository {
  add: (data: AddDeckRepository.Params) => Promise<AddDeckRepository.Result>;
}

export namespace AddDeckRepository {
  export type Params = AddDeck.Params;
  export type Result = AddDeck.Result;
}
