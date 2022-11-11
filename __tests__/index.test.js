const api = require('./utils/api')

describe('GET /', () => {
  it('responds with json', async () => {
    const response = await api.doGet('/')

    expect(response.statusCode).toBe(200);
  });
});
