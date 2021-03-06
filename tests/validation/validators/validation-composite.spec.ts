import { ValidationComposite } from '@/validation/validators';
import { ValidationSpy } from '@/tests/presentation/mocks';
import { MissingParamError } from '@/presentation/errors';

import faker from 'faker';

const field = faker.random.word();

type SutTypes = {
  sut: ValidationComposite;
  validationSpies: ValidationSpy[];
};

const makeSut = (): SutTypes => {
  const validationSpies = [new ValidationSpy(), new ValidationSpy()];
  const sut = new ValidationComposite(validationSpies);
  return {
    sut,
    validationSpies,
  };
};

describe('Validation Composite', () => {
  it('Should return a MissingParamError if validation fails', () => {
    const { sut, validationSpies } = makeSut();
    validationSpies[1].error = new MissingParamError(field);
    const error = sut.validate({ [field]: faker.random.word() });
    expect(error).toEqual(validationSpies[1].error);
  });

  it('Should return the first error if validation fails', () => {
    const { sut, validationSpies } = makeSut();
    validationSpies[0].error = new Error();
    validationSpies[1].error = new MissingParamError(field);
    const error = sut.validate({ [field]: faker.random.word() });
    expect(error).toEqual(validationSpies[0].error);
  });
});
