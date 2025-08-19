// Basic API tests - Run with: npm test

import request from 'supertest';
import app from '../index.js';

describe('API Health Check', () => {
  test('GET /api/health should return OK', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);
    
    expect(response.body.status).toBe('OK');
  });
});

describe('Authentication', () => {
  test('POST /api/auth/login with valid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'admin',
        password: 'admin123'
      })
      .expect(200);
    
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('user');
  });

  test('POST /api/auth/login with invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'invalid',
        password: 'invalid'
      })
      .expect(401);
    
    expect(response.body).toHaveProperty('error');
  });
});

describe('Public Endpoints', () => {
  test('GET /api/courses should return courses', async () => {
    const response = await request(app)
      .get('/api/courses')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/products should return products', async () => {
    const response = await request(app)
      .get('/api/products')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/packages should return packages', async () => {
    const response = await request(app)
      .get('/api/packages')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/jobs should return jobs', async () => {
    const response = await request(app)
      .get('/api/jobs')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('Protected Endpoints', () => {
  let authToken;

  beforeAll(async () => {
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'admin',
        password: 'admin123'
      });
    
    authToken = loginResponse.body.token;
  });

  test('GET /api/admin/stats with auth token', async () => {
    const response = await request(app)
      .get('/api/admin/stats')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(200);
    
    expect(response.body).toHaveProperty('totalCourses');
    expect(response.body).toHaveProperty('totalProducts');
  });

  test('GET /api/admin/stats without auth token', async () => {
    await request(app)
      .get('/api/admin/stats')
      .expect(401);
  });
});