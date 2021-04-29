import { Validation } from '@/presentation/protocols';
import {
  RequiredFieldValidation,
  ValidationComposite,
} from '@/validation/validators';

export const makeAddDeckValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ['name', 'isPublic']) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
