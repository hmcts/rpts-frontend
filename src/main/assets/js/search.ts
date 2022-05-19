import $ from 'jquery';

import { AjaxErrorHandler } from './ajaxErrorHandler';

export class SearchController {
  private formId = '#getAddressInformation';
  private addressesListId = '#addressesList';
  private main = '#main';
  private addressesList = '#addressesList';
  private addressLine = '#addressLine';
  private searchPostcodeBtn = '#searchPostcodeBtn';

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    $(() => {
      this.getAddressContent({ postcode: '', initial: true }, true);
    });
  }

  private getAddressContent(data: any, initial: boolean) {
    $(this.searchPostcodeBtn).prop('disabled', true);
    $.ajax({
      url: '/search',
      method: 'get',
      data,
    })
      .done(res => {
        $(this.main).html(res);
        $(this.searchPostcodeBtn).prop('disabled', false);
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

          // Set the copy buttons bindings
          this.setBindingsForCopyButtons('#copyFourCharCode', '#fourCharCode');
          this.setBindingsForCopyButtons('#copyNineCharCode', '#nineCharCode');
          this.setBindingsForCopyButtons('#copyAddressLine1', '#addressLine1');
          this.setBindingsForCopyButtons('#copyAddressLine2', '#addressLine2');
          this.setBindingsForCopyButtons('#copyAddressLine3', '#addressLine3');
          this.setBindingsForCopyButtons('#copyAddressLine4', '#addressLine4');
          this.setBindingsForCopyButtons('#copyAddressLine5', '#addressLine5');
          this.setBindingsForCopyButtons('#copyAddressLine6', '#addressLine6');
        }
      })
      .fail((response: any) => AjaxErrorHandler.handleError(response, 'GET address information failed.'));
  }

  private setUpResultEventHandler(): void {
    $(this.addressesListId).on('change', (e: any) => {
      this.setAddressFields(e.target.value.split(','));
    });
  }

  private setBindingsForCopyButtons(copyElement: string, elementToCopyTextFrom: string): void {
    $(copyElement).on('click', (e: any) => {
      e.preventDefault();
      navigator.clipboard.writeText(<string>$(elementToCopyTextFrom).val()).then(r => r);
    });
  }

  private setAddressFields(addressLines: string[]): void {
    for (let i = 1; i < 7; i++) {
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
