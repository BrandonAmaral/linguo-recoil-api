import { AddDeckController } from '@/presentation/controllers';

const makeSut = (): AddDeckController => {
  return new AddDeckController();
};

describe('AddDeck Controller', () => {
  it('Should return 200 on success', async () => {
    const sut = makeSut();
    const response = await sut.handle('any_request');
    expect(response.statusCode).toBe(200);
  });
});
