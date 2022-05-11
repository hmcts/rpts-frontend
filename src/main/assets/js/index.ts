import '../scss/main.scss';
import { initAll } from 'govuk-frontend';

import { SearchController } from '../js/search';

initAll();

try {
  new SearchController();
} catch (e) {
  console.log('Could not create JS for search page: ' + e);
}
