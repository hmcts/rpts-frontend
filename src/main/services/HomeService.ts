import { RptsApi } from '../api/rptsApi';
import { AddressInfo } from '../types/AddressInfo';

export class HomeService {
  public static getSearchResults(req: any, res: any, api: RptsApi): any {
    const postcode = req.query.postcode ? (req.query.postcode as string).trim() : '';
    const postcodeIsValid = HomeService.postcodeIsValidFormat(postcode);

    if (postcode === '' || !postcodeIsValid) {
      return res.render(
        'search/content',
        HomeService.getOptions(
          '',
          postcode,
          postcode === '' && !req.query.initial, // cater for first page render
          !postcodeIsValid && !req.query.initial, // cater for first page render
          {}
        )
      );
    }

    api
      .getCourts(postcode)
      .then((value: AddressInfo) => {
        return res.render(
          'search/content',
          HomeService.getOptions('', postcode, postcode === '' && !req.query.initial, false, value)
        );
      })
      .catch(err => {
        return res.render(
          'search/content',
          HomeService.getOptions(
            err.request.res.statusCode === 500
              ? 'Internal error: please contact your system administrator'
              : 'No details found for provided postcode',
            postcode,
            postcode === '' && !req.query.initial,
            false,
            {}
          )
        );
      });
  }

  private static getOptions(
    errorMsg: string,
    postcodeEntered: string,
    emptyValueFound: boolean,
    postCodeInvalidFormat: boolean,
    addressInfo: unknown
  ) {
    return {
      errorMsg,
      postcodeEntered,
      emptyValueFound,
      postcodeInvalidFormat: postCodeInvalidFormat,
      addressInfo,
    };
  }

  private static postcodeIsValidFormat(postcode: string): boolean {
    const postcodeRegex = new RegExp(
      '([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|' +
        '(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))' +
        '\\s?[0-9][A-Za-z]{2})',
      'g'
    );

    const match = postcode.match(postcodeRegex);
    return match?.length === 1 && match[0] === postcode;
  }
}
