import axios, { AxiosResponse } from 'axios';
import { expect } from '@jest/globals';

const testUrl = process.env.TEST_URL || 'http://localhost:3120';

describe('Smoke Test', () => {
  describe('Home page loads', () => {
    test('with correct content', async () => {
      const response: AxiosResponse = await axios.get(testUrl, {
        headers: {
          'Accept-Encoding': 'gzip',
        },
      });
      expect(response.status).toEqual(200);
      expect(response.data).toContain('GOV.UK');
    });
  });
});
