const request = require('supertest');
const app = require('../src/app');

describe('Auth module', () => {
  it('User can succesfully login', async () => {
    const res = await request(app).post('/auth/login').send({
      username: 'user',
      password: 'password'
    });
    expect(res.status).toEqual(200)
  });

  it(`User can't login with non registered username`, async () => {
    const res = await request(app).post('/auth/login').send({
      username: 'unregistered_user',
      password: 'password'
    });
    expect(res.status).toEqual(403)
  });

  it(`User can't login with invalid password`, async () => {
    const res = await request(app).post('/auth/login').send({
      username: 'user',
      password: 'invalid_password'
    });
    expect(res.status).toEqual(403)
  });
});
