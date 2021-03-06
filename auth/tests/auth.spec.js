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
    expect(res.status).toEqual(401)
  });

  it(`User can't login with invalid password`, async () => {
    const res = await request(app).post('/auth/login').send({
      username: 'user',
      password: 'invalid_password'
    });
    expect(res.status).toEqual(401)
  });

  it('User should get session cookie after auth', async () => {
    const res = await request(app).post('/auth/login').send({
      username: 'user',
      password: 'password'
    });
    expect(Array.isArray(res.headers['set-cookie'])).toBe(true)
  });

  it.todo('user can gain access using session cookie');
  it.todo('User get 401 on invalid session cookie');
  it.todo(`User can't use session cookie after logout`);
});
