import { AddDeckRepository } from '@/data/protocols';

export class AddDeckRepositorySpy implements AddDeckRepository {
  params?: AddDeckRepository.Params;

  async add(data: AddDeckRepository.Params): Promise<AddDeckRepository.Result> {
    this.params = data;
  }
}
