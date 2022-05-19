import { AxiosError, AxiosInstance } from 'axios';

import { AddressInfo } from '../types/AddressInfo';

const { Logger } = require('@hmcts/nodejs-logging');

export class RptsApi {
  private readonly baseURL = '/v1/search';
  private readonly logger = Logger.getLogger('app');

  constructor(private readonly axios: AxiosInstance) {}

  public getCourts(postcode: string): Promise<AddressInfo> {
    return this.axios
      .get(`${this.baseURL}/address/` + postcode)
      .then((results: any) => results.data)
      .catch(err => {
        this.logError(err);
        return Promise.reject(err);
      });
  }

  private logError(err: AxiosError) {
    this.logger.error(err.message);

    if (err.response) {
      this.logger.info(err.response.data);
      this.logger.info(err.response.headers);
    }
  }
}
