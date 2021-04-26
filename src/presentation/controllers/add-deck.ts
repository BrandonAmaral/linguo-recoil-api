import { AddDeck } from '@/domain/usecases';
import { Controller, HttpResponse } from '@/presentation/protocols';

export class AddDeckController implements Controller {
  constructor(private readonly addDeck: AddDeck) {}

  async handle(request: any): Promise<HttpResponse> {
    this.addDeck.add(request);
    return {
      body: 'result',
      statusCode: 200,
    };
  }
}
