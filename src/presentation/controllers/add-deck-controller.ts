import { AddDeck } from '@/domain/usecases';
import { Controller, HttpResponse } from '@/presentation/protocols';
import { noContent, serverError } from '@/presentation/helpers';

export class AddDeckController implements Controller {
  constructor(private readonly addDeck: AddDeck) {}

  async handle(request: AddDeckController.Params): Promise<HttpResponse> {
    try {
      await this.addDeck.add({
        ...request,
        createdAt: new Date(),
        modifiedAt: new Date(),
      });
      return noContent();
    } catch (err) {
      return serverError(err);
    }
  }
}

export namespace AddDeckController {
  export type Params = {
    name: string;
    isPublic: boolean;
  };
}
