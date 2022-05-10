import '../scss/main.scss';
import { initAll } from 'govuk-frontend';

import { SearchController } from '../js/search';

initAll();
new SearchController();
