import axios from 'axios';
import config from 'config';
import { Application } from 'express';

import { RptsApi } from '../api/rptsApi';
import { HomeService } from '../services/HomeService';

export default function (app: Application): void {
  app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/search', (req, res) => {
    HomeService.getSearchResults(
      req,
      res,
      new RptsApi(
        axios.create({
          baseURL: config.get('services.api.url'),
        })
      )
    );
  });
}
