import { Controller, HttpResponse } from '@/presentation/protocols';

export class AddDeckController implements Controller {
  async handle(request: any): Promise<HttpResponse> {
    return {
      body: 'data',
      statusCode: 200,
    };
  }
}
