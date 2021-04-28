import { AddDeckController } from '@/presentation/controllers';
import { AddDeckSpy } from '@/tests/presentation/mocks';
import { noContent, serverError } from '@/presentation/helpers';

import faker from 'faker';
import MockDate from 'mockdate';

const mockRequest = (): AddDeckController.Params => ({
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
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  it('Should return 204 on success', async () => {
    const { sut } = makeSut();
    const request = mockRequest();
    const response = await sut.handle(request);
    expect(response).toEqual(noContent());
  });

  it('Should call AddDeck with correct values', async () => {
    const { sut, addDeckSpy } = makeSut();
    const request = mockRequest();
    await sut.handle(request);
    expect(addDeckSpy.params).toEqual({
      ...request,
      createdAt: new Date(),
      modifiedAt: new Date(),
    });
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
