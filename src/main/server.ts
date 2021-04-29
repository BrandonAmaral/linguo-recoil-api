import { MongoHelper } from '@/infra/db';
import env from '@/main/config/env';

MongoHelper.connect(env.mongoURL)
  .then(async () => {
    const app = (await import('./config/app')).default;
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`),
    );
  })
  .catch((err) => console.log(`ERROR: ${err}`));
