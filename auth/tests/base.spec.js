const request = require('supertest')
const app = require('../src/app')


describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('Base app.js', () => {
  it('should response with 200 status', async () => {
    const res = await request(app).get('/').send()
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hi!')
  })
})
