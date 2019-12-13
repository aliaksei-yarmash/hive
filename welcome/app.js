const Koa = require('koa');
const MongoClient = require('mongodb').MongoClient;

const DB_NAME = 'ubuntu-db';
const COLLECTION_NAME = 'visitors';

const url = 'mongodb://ubuntu:ubuntu@mongodb:27017/ubuntu-db?authSource=admin';
const app = new Koa();

app.use(async ctx => {
  const client = await MongoClient.connect(url);
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);

  await collection.insertOne({ ip: ctx.ip, date: new Date() });
  const allVisitors = await collection.find().toArray();
  client.close();
  ctx.body = allVisitors;
});

app.listen(3000);
