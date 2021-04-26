import { AddDeckController } from '@/presentation/controllers';
import { AddDeckSpy } from '@/tests/presentation/mocks';
import { noContent, serverError } from '@/presentation/helpers';

import faker from 'faker';

const mockRequest = (): any => ({
  name: faker.random.words(),
  isPublic: true,
});

type SutTypes = {
  sut: AddDeckController;
  addDeckSpy: AddDeckSpy;
};

const makeSut = (): SutTypes => {
  const addDeckSpy = new AddDeckSpy();
  const sut = new AddDeckController(addDeckSpy);
  return {
    sut,
    addDeckSpy,
  };
};

describe('AddDeck Controller', () => {
  it('Should return 204 on success', async () => {
    const { sut } = makeSut();
    const request = mockRequest();
    const response = await sut.handle(request);
    expect(response).toEqual(noContent());
  });

  it('Should call AddDeck with correct values', async () => {
    const { sut, addDeckSpy } = makeSut();
    const addSpy = jest.spyOn(addDeckSpy, 'add');
    const request = mockRequest();
    await sut.handle(request);
    expect(addSpy).toHaveBeenCalledWith(request);
  });

  it('Should return 500 if AddDeck fails', async () => {
    const { sut, addDeckSpy } = makeSut();
    jest.spyOn(addDeckSpy, 'add').mockImplementationOnce(() => {
      throw new Error();
    });
    const request = mockRequest();
    const response = await sut.handle(request);
    expect(response).toEqual(serverError(new Error()));
  });
});
