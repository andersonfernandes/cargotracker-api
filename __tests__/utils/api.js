const request = require('supertest')
const app = require('../../app')

module.exports = {
  doGet: async (url) => await request(app).get(url),
  doPost: async (url, body) => await request(app).post(url).send(body),
  doPut: async (url, body) => await request(app).put(url).send(body),
  doDelete: async (url) => await request(app).delete(url),
}
