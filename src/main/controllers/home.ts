import { Application } from 'express';
import { RptsApi } from '../api/rptsApi';
import config from 'config';
import axios from 'axios';
import { AddressInfo } from '../types/AddressInfo';

export default function (app: Application): void {

  app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/search', (req, res) => {

    const postcode = req.query.postcode ? req.query.postcode as string :  '';
    const postcodeIsValid = postcodeIsValidFormat(postcode);

    if (postcode == '' || !postcodeIsValid) {
      return res.render('search/content',  getOptions('', postcode,
        postcode == '' && !req.query.initial,
        !postcodeIsValid && !req.query.initial, {}));
    }

    new RptsApi(axios.create({
      baseURL: config.get('services.api.url')
    })).getCourts(postcode)
      .then((value: AddressInfo) => {

        console.log(value.addresses[0].DPA.ADDRESS);

        return res.render('search/content',  getOptions('', postcode,
          postcode == '' && !req.query.initial,
          false, value));
      })
      .catch((err) => {
        return res.render('search/content',  getOptions(err.request.res.statusCode == 500
          ? 'Internal error: please contact your system administrator':
          'No details found for provided postcode', postcode,
          postcode == '' && !req.query.initial, false, {}));
      });
  });

  function getOptions(errorMsg: string,  postcodeEntered: string,
                      emptyValueFound: boolean, postCodeInvalidFormat: boolean,
                      addressInfo: any) {
    return {
      'errorMsg': errorMsg,
      'postcodeEntered': postcodeEntered,
      'emptyValueFound': emptyValueFound,
      'postcodeInvalidFormat': postCodeInvalidFormat,
      'addressInfo': addressInfo
    };
  }

  function postcodeIsValidFormat(postcode: string): boolean {
    const postcodeRegex = new RegExp('([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|' +
      '(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))' +
      '\\s?[0-9][A-Za-z]{2})', 'g');

    const match = postcode.match(postcodeRegex);
    return match?.length === 1 && match[0] === postcode;
  }
}
