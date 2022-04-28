import { Application } from 'express';

export default function (app: Application): void {
  app.get('/', (req, res) => {

    res.render('home', {
      'errorMsg': '',
      'emptyValueFound': false,
      'postcodeInvalidFormat': false,
      'postcodeEntered': ''
    });
  });

  app.get('/:postcode/results', (req, res) => {

    res.render('home', {
      'errorMsg': '',
      'emptyValueFound': false,
      'postcodeInvalidFormat': false,
      'postcodeEntered': req.params.postcode
    });
  });
}
