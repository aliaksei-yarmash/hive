const Koa = require('koa');
const axios = require('axios');
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient

const dbName = 'ubuntu-db'
const url = 'mongodb://ubuntu:ubuntu@mongodb:27017/ubuntu-db';
const app = new Koa();

app.use(async ctx => {
  // MongoClient.connect(url, function(err, client) {
  //   assert.equal(null, err);
  //   console.log("Connected successfully to server");
    
  //   const db = client.db(dbName);
    
  //   client.close();
  //   ctx.body = 'a'
  //   });
  ctx.body = 'Welcome!';
});

app.listen(3000);
