import { RptsApi } from '../../../main/api/rptsApi';
import { HomeService } from '../../../main/services/HomeService';
import { AddressInfo } from '../../../main/types/AddressInfo';

import { mockRequest } from './utils/mockRequest';
import { mockResponse } from './utils/mockResponse';

const axios = require('axios');

jest.mock('axios');

describe('HomeControllerTest', () => {
  const addressInfo: AddressInfo = {
    postcode: 'TQ1 1BX',
    fourCharLaCode: '00HH',
    nineCharLaCode: 'E06000027',
    addresses: [
      {
        DPA: {
          UPRN: '10002992642',
          UDPRN: '24856338',
          ADDRESS: 'J D S, 1, FLEET STREET, TORQUAY, TQ1 1BX',
          ORGANISATION_NAME: 'J D S',
          BUILDING_NUMBER: '1',
          THOROUGHFARE_NAME: 'FLEET STREET',
          POST_TOWN: 'TORQUAY',
          POSTCODE: 'TQ1 1BX',
          RPC: '1',
          X_COORDINATE: 291840.0,
          Y_COORDINATE: 63617.0,
          STATUS: 'APPROVED',
          LOGICAL_STATUS_CODE: '1',
          CLASSIFICATION_CODE: 'CR06',
          CLASSIFICATION_CODE_DESCRIPTION: 'Public House / Bar / Nightclub',
          LOCAL_CUSTODIAN_CODE: 1165,
          LOCAL_CUSTODIAN_CODE_DESCRIPTION: 'TORBAY',
          COUNTRY_CODE: 'E',
          COUNTRY_CODE_DESCRIPTION: 'This record is within England',
          POSTAL_ADDRESS_CODE: 'D',
          POSTAL_ADDRESS_CODE_DESCRIPTION: 'A record which is linked to PAF',
          BLPU_STATE_CODE: '2',
          BLPU_STATE_CODE_DESCRIPTION: 'In use',
          TOPOGRAPHY_LAYER_TOID: 'osgb1000012266040',
          PARENT_UPRN: '100041053429',
          LAST_UPDATE_DATE: '24/04/2019',
          ENTRY_DATE: '24/10/2005',
          BLPU_STATE_DATE: '20/11/2012',
          LANGUAGE: 'EN',
          MATCH: 1.0,
          MATCH_DESCRIPTION: 'EXACT',
          DELIVERY_POINT_SUFFIX: '1L',
        },
      },
      {
        DPA: {
          UPRN: '100041053430',
          UDPRN: '24856337',
          ADDRESS: '2, FLEET STREET, TORQUAY, TQ1 1BX',
          BUILDING_NUMBER: '2',
          THOROUGHFARE_NAME: 'FLEET STREET',
          POST_TOWN: 'TORQUAY',
          POSTCODE: 'TQ1 1BX',
          RPC: '1',
          X_COORDINATE: 291834.0,
          Y_COORDINATE: 63625.0,
          STATUS: 'APPROVED',
          LOGICAL_STATUS_CODE: '1',
          CLASSIFICATION_CODE: 'PP',
          CLASSIFICATION_CODE_DESCRIPTION: 'Property Shell',
          LOCAL_CUSTODIAN_CODE: 1165,
          LOCAL_CUSTODIAN_CODE_DESCRIPTION: 'TORBAY',
          COUNTRY_CODE: 'E',
          COUNTRY_CODE_DESCRIPTION: 'This record is within England',
          POSTAL_ADDRESS_CODE: 'D',
          POSTAL_ADDRESS_CODE_DESCRIPTION: 'A record which is linked to PAF',
          BLPU_STATE_CODE_DESCRIPTION: 'Unknown/Not applicable',
          TOPOGRAPHY_LAYER_TOID: 'osgb1000012266039',
          LAST_UPDATE_DATE: '30/05/2021',
          ENTRY_DATE: '24/10/2005',
          LANGUAGE: 'EN',
          MATCH: 1.0,
          MATCH_DESCRIPTION: 'EXACT',
          DELIVERY_POINT_SUFFIX: '1B',
        },
      },
      {
        DPA: {
          UPRN: '10002983936',
          UDPRN: '24856339',
          ADDRESS: 'TORQUAY JEWELLERS, 3, FLEET STREET, TORQUAY, TQ1 1BX',
          ORGANISATION_NAME: 'TORQUAY JEWELLERS',
          BUILDING_NUMBER: '3',
          THOROUGHFARE_NAME: 'FLEET STREET',
          POST_TOWN: 'TORQUAY',
          POSTCODE: 'TQ1 1BX',
          RPC: '1',
          X_COORDINATE: 291831.0,
          Y_COORDINATE: 63629.0,
          STATUS: 'APPROVED',
          LOGICAL_STATUS_CODE: '1',
          CLASSIFICATION_CODE: 'CR',
          CLASSIFICATION_CODE_DESCRIPTION: 'Retail',
          LOCAL_CUSTODIAN_CODE: 1165,
          LOCAL_CUSTODIAN_CODE_DESCRIPTION: 'TORBAY',
          COUNTRY_CODE: 'E',
          COUNTRY_CODE_DESCRIPTION: 'This record is within England',
          POSTAL_ADDRESS_CODE: 'D',
          POSTAL_ADDRESS_CODE_DESCRIPTION: 'A record which is linked to PAF',
          BLPU_STATE_CODE_DESCRIPTION: 'Unknown/Not applicable',
          TOPOGRAPHY_LAYER_TOID: 'osgb1000012266038',
          PARENT_UPRN: '100041053431',
          LAST_UPDATE_DATE: '24/04/2019',
          ENTRY_DATE: '24/10/2005',
          LANGUAGE: 'EN',
          MATCH: 1.0,
          MATCH_DESCRIPTION: 'EXACT',
          DELIVERY_POINT_SUFFIX: '1D',
        },
      },
    ],
  };

  test('Should not get address results and render the page if postcode empty', async () => {
    const req = mockRequest();
    req.query = {
      postcode: '',
    };
    const res = mockResponse();

    const axiosResponse = { data: addressInfo };
    axios.get.mockResolvedValue(axiosResponse);

    await HomeService.getSearchResults(req, res, new RptsApi(axios));

    expect(res.render).toBeCalledWith('search/content', {
      addressInfo: {},
      emptyValueFound: true,
      errorMsg: '',
      postcodeEntered: '',
      postcodeInvalidFormat: true,
    });
  });
});
