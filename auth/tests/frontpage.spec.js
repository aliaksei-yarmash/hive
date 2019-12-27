const request = require('supertest')
const app = require('../src/app')

describe('Frontpage module', () => {
  it('should response with 200 status', async () => {
    const res = await request(app).get('/').send()
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hi!')
  })
})
