import { mongodbAdapter } from '@better-auth/mongo-adapter';
import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';

const mongoUrl = process.env.BETTER_AUTH_MONGODB_URL;
if (!mongoUrl) throw new Error('Mongodb url invalid');

const client = new MongoClient(mongoUrl);
const db = client.db('for-testing-users');
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client,
    }),
});
