const request = require('supertest')
const app = require('../src/app')

describe('Frontpage module', () => {
  it('should response with 200 status for not secured routes', async () => {
    const res = await request(app).get('/notSecured').send()
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hi!')
  })

  it('should throw 401 for secured routes for non-authorized users', async () => {
    const res = await request(app).get('/secured').send()
    expect(res.statusCode).toEqual(401)
  })
})
