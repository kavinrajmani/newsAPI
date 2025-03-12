const request = require('supertest');
const app = require('../app');

describe('News API', () => {
  describe('GET /api/news', () => {
    it('should return all news', async () => {
      const res = await request(app).get('/api/news');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/news/:id', () => {
    it('should return a news item by id', async () => {
      const res = await request(app).get('/api/news/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('id', 1);
      expect(res.body).toHaveProperty('title');
      expect(res.body).toHaveProperty('content');
    });

    it('should return 404 if news id does not exist', async () => {
      const res = await request(app).get('/api/news/999');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('message', 'News not found');
    });
  });

  describe('PUT /api/news/:id', () => {
    it('should update a news item', async () => {
      const updatedNews = {
        title: 'Updated Title',
        content: 'Updated Content'
      };

      const res = await request(app)
        .put('/api/news/1')
        .send(updatedNews);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('id', 1);
      expect(res.body.title).toBe(updatedNews.title);
      expect(res.body.content).toBe(updatedNews.content);
    });

    it('should return 404 if news id does not exist', async () => {
      const res = await request(app)
        .put('/api/news/999')
        .send({ title: 'Test' });

      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('message', 'News not found');
    });
  });

  describe('DELETE /api/news/:id', () => {
    it('should delete a news item', async () => {
      const res = await request(app).delete('/api/news/2');
      expect(res.statusCode).toBe(204);
    });

    it('should return 404 if news id does not exist', async () => {
      const res = await request(app).delete('/api/news/999');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('message', 'News not found');
    });
  });
});