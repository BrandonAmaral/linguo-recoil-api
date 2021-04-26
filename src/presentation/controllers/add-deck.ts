import { AddDeck } from '@/domain/usecases';
import { Controller, HttpResponse } from '@/presentation/protocols';
import { noContent, serverError } from '@/presentation/helpers';

export class AddDeckController implements Controller {
  constructor(private readonly addDeck: AddDeck) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      this.addDeck.add(request);
      return noContent();
    } catch (err) {
      return serverError(err);
    }
  }
}
