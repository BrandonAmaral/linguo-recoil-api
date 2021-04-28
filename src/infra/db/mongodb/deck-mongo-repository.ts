import { AddDeckRepository } from '@/data/protocols';
import { MongoHelper } from '@/infra/db';

export class DeckMongoRepository implements AddDeckRepository {
  async add(data: AddDeckRepository.Params): Promise<AddDeckRepository.Result> {
    const deckCollection = await MongoHelper.getCollection('decks');
    await deckCollection.insertOne(data);
  }
}
