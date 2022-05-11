import $ from 'jquery';

import { AjaxErrorHandler } from './ajaxErrorHandler';

export class SearchController {
  private formId = '#getAddressInformation';
  private addressesListId = '#addressesList';
  private main = '#main';
  private addressesList = '#addressesList';
  private addressLine = '#addressLine';

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    $(() => {
      this.getAddressContent({ postcode: '', initial: true }, true);
    });
  }

  private getAddressContent(data: any, initial: boolean) {
    $.ajax({
      url: '/search',
      method: 'get',
      data,
    })
      .done(res => {
        $(this.main).html(res);
        if (initial) {
          this.setUpSearchEventHandler();
        } else {
          // If we get a response back that includes address information,
          // populate the values within the address line boxes
          this.setUpResultEventHandler();

          // The on change event will set all future text changes from the field chosen, but
          // the first instance needs to be set too
          this.setAddressFields(
            $(this.addressesList + ' option:nth-child(1)')
              .text()
              .split(',')
          );
        }
      })
      .fail((response: any) => AjaxErrorHandler.handleError(response, 'GET address information failed.'));
  }

  private setUpResultEventHandler(): void {
    $(this.addressesListId).on('change', (e: any) => {
      this.setAddressFields(e.target.value.split(','));
    });
  }

  private setAddressFields(addressLines: string[]): void {
    console.log(addressLines);
    for (let i = 1; i < 6; i++) {
      $(this.addressLine + i).val(addressLines[i - 1]);
    }
  }

  private setUpSearchEventHandler(): void {
    $(this.formId).on('submit', (e: any) => {
      e.preventDefault();
      this.getAddressContent($(e.target).serialize(), false);
    });
  }
}
