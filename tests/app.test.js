const request = require('supertest');
const app = require('../app');

describe('GET /api/sample', () => {
  it('should return a JSON response with message "Hello, World!"', async () => {
    const response = await request(app).get('/api/sample');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });
});
