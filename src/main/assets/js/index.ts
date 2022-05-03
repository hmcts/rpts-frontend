import '../scss/main.scss';
import '../js/search'
import { initAll } from 'govuk-frontend';
import { SearchController } from './search';

initAll();
new SearchController();
