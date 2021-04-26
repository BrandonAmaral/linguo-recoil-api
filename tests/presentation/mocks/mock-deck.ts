import { AddDeck } from '@/domain/usecases';

export class AddDeckSpy implements AddDeck {
  params: AddDeck.Params | undefined;

  async add(params: AddDeck.Params): Promise<AddDeck.Result> {
    this.params = params;
  }
}
