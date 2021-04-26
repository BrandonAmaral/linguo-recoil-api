import { AddDeck } from '@/domain/usecases';
import { Controller, HttpResponse } from '@/presentation/protocols';

export class AddDeckController implements Controller {
  constructor(private readonly addDeck: AddDeck) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      this.addDeck.add(request);
      return {
        body: 'result',
        statusCode: 200,
      };
    } catch (err) {
      return {
        body: err,
        statusCode: 500,
      };
    }
  }
}
