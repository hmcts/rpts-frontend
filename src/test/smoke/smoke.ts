import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';

const testUrl = process.env.TEST_URL || 'http://localhost:3120';

describe('Smoke Test', () => {
  describe('Home page loads', () => {
    test('with correct content', async () => {
      const response: AxiosResponse = await axios.get(testUrl, {
        headers: {
          'Accept-Encoding': 'gzip',
        },
      });
      expect(response.status).eq(200);
      expect(response.data).includes('GOV.UK');
    });
  });
});
