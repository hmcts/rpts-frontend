import $ from 'jquery';
import {AjaxErrorHandler} from './ajaxErrorHandler';

export class SearchController {

  private formId = '#getAddressInformation';
  private main = '#main';

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    $(() => {
      this.getAddressContent({'postcode' : '', 'initial': true}, true)
    });
  }

  private getAddressContent(data: any, initial: boolean) {
      $.ajax({
        url:  '/search',
        method: 'get',
        data: data
      }).done((res) => {
        $(this.main).html(res);
        if (initial) {
          this.setUpSearchEventHandler()
        }
      }).fail((response: any) =>
        AjaxErrorHandler.handleError(response, 'GET address information failed.'));
  }

  private setUpSearchEventHandler(): void {
    $(this.formId).on('submit', (e: any) => {
      e.preventDefault();
      this.getAddressContent($(e.target).serialize(), false)
    });
  }
}
