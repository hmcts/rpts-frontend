import $ from 'jquery';
import {AjaxErrorHandler} from './ajaxErrorHandler';

const { initAll } = require('govuk-frontend');

export class SearchController {

  private formId = '#getAddressInformation';
  private searchResults = '#searchResults';

  constructor() {
    console.log('goes into constructor');
    this.initialize();
    initAll();
  }

  private initialize(): void {
    $(() => {
      console.log('Goes into the initialize method');
      this.setUpSearchEventHandler();
    });
  }

  private setUpSearchEventHandler(): void {
    $(this.formId).on('submit', (e: any) => {
      e.preventDefault();

      const url = $(e.target).attr('action');
      $.ajax({
        url: url,
        method: 'get',
        data: $(e.target).serialize()
      }).done((res) => {
        $(this.searchResults).html(res);
      }).fail((response: any) =>
        AjaxErrorHandler.handleError(response, 'GET address information failed.'));
    });
  }
}
