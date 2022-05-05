export interface AddressInfo {
  postcode: string,
  fourCharLaCode: string,
  nineCharLaCode: string
  addresses: Address[]
}

export interface Address {
  DPA: AddressDetail
}

export interface AddressDetail {
  UPRN: string
  UDPRN: string,
  ADDRESS: string,
  BUILDING_NUMBER: string,
  THOROUGHFARE_NAME: string
  DEPENDENT_LOCALITY: string,
  POST_TOWN: string,
  POSTCODE: string,
  RPC: string,
  X_COORDINATE: number,
  Y_COORDINATE: number,
  STATUS: string,
  LOGICAL_STATUS_CODE: string,
  CLASSIFICATION_CODE: string,
  CLASSIFICATION_CODE_DESCRIPTION: string,
  LOCAL_CUSTODIAN_CODE: number,
  LOCAL_CUSTODIAN_CODE_DESCRIPTION: string,
  COUNTRY_CODE: string,
  COUNTRY_CODE_DESCRIPTION: string,
  POSTAL_ADDRESS_CODE: string,
  POSTAL_ADDRESS_CODE_DESCRIPTION: string,
  BLPU_STATE_CODE_DESCRIPTION: string,
  TOPOGRAPHY_LAYER_TOID: string,
  LAST_UPDATE_DATE: string,
  ENTRY_DATE: string,
  LANGUAGE: string,
  MATCH: number,
  MATCH_DESCRIPTION: string,
  DELIVERY_POINT_SUFFIX: string
}
