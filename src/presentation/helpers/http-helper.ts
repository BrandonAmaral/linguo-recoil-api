import { HttpResponse } from '@/presentation/protocols';
import { ServerError } from '@/presentation/errors';

export const noContent = (): HttpResponse => ({
  body: null,
  statusCode: 204,
});

export const badRequest = (error: Error): HttpResponse => ({
  body: error,
  statusCode: 400,
});

export const serverError = (error: Error): HttpResponse => ({
  body: new ServerError(error.stack),
  statusCode: 500,
});
