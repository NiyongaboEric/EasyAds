import request from 'supertest';
import { homePageMessage, routNotFoundMessage } from '../__mocks__/app';
import app from '../app';

describe('Landing page', () => {
  it('should return landing page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(homePageMessage.status);
  });
});

describe('Wrong http method', () => {
  it('Route not found', async () => {
    const res = await request(app).get('/IamWrong');
    expect(res.statusCode).toEqual(routNotFoundMessage.status);
  });
});
