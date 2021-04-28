import { DbAddDeck } from '@/data/usecases';
import { AddDeckRepositorySpy } from '@/tests/data/mocks';
import { mockAddDeckParams } from '@/tests/domain/mocks';

type SutTypes = {
  sut: DbAddDeck;
  addDeckRepositorySpy: AddDeckRepositorySpy;
};

const makeSut = (): SutTypes => {
  const addDeckRepositorySpy = new AddDeckRepositorySpy();
  const sut = new DbAddDeck(addDeckRepositorySpy);
  return { sut, addDeckRepositorySpy };
};

describe('DbAddDeck Usecase', () => {
  it('Should call AddDeckRepository with correct values', async () => {
    const { sut, addDeckRepositorySpy } = makeSut();
    const addSpy = jest.spyOn(addDeckRepositorySpy, 'add');
    const data = mockAddDeckParams();
    await sut.add(data);
    expect(addSpy).toHaveBeenCalledWith(data);
  });
});
