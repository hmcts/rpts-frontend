import { app } from '../../main/app';
import { expect } from '@jest/globals';
import request from 'supertest';

describe('Home page', () => {
  describe('on GET', () => {
    test('should return sample home page', async () => {
      await request(app)
        .get('/')
        .expect(res => expect(res.status).toEqual(200));
    });
  });
});
