import { Application } from 'express';

export default function (app: Application): void {
  app.get('/', (req, res) => {

    res.render('home',  getOptions('', '',
      false, false));
  });

  app.get('/:postcode/results', (req, res) => {

    res.render('home',  getOptions('', req.params.postcode,
      false, false));
  });

  function getOptions(errorMsg: string,  postcodeEntered: string,
                      emptyValueFound: boolean, postCodeInvalidFormat: boolean) {
    return {
      'errorMsg': errorMsg,
      'postcodeEntered': postcodeEntered,
      'emptyValueFound': emptyValueFound,
      'postcodeInvalidFormat': postCodeInvalidFormat
    };
  }
}
