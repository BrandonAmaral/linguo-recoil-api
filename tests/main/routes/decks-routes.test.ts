import app from '@/main/config/app';
import { MongoHelper } from '@/infra/db';

import request from 'supertest';
import { Collection } from 'mongodb';

let deckCollection: Collection;

describe('Survey Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL!);
  });

  beforeEach(async () => {
    deckCollection = await MongoHelper.getCollection('decks');
    await deckCollection.deleteMany({});
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  describe('POST /decks', () => {
    it('Should return 204 on success', async () => {
      await request(app)
        .post('/api/decks/add')
        .send({
          deckName: 'any_name',
          isPublic: true,
        })
        .expect(204);
    });

    it('Should return 400 if any param is missing', async () => {
      await request(app)
        .post('/api/decks/add')
        .send({
          deckName: 'any_name',
        })
        .expect(400);
    });
  });
});
