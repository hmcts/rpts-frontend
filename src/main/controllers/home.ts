import { Application } from 'express';

export default function (app: Application): void {
  app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/search', (req, res) => {

    console.log(req.query);

    const postcode = req.query.postcode ? req.query.postcode as string :  '';

    res.render('search/content',  getOptions('', postcode,
      postcode == '' && !req.query.initial, false));
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
