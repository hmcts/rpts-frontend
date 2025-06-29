import * as path from 'path';

import * as express from 'express';
import * as nunjucks from 'nunjucks';

export class Nunjucks {
  constructor(public developmentMode: boolean) {
    this.developmentMode = developmentMode;
  }

  enableFor(app: express.Express): void {
    app.set('view engine', 'njk');
    const govUkFrontendPath = path.join(__dirname, '..', '..', '..', '..', '.yarn/cache', 'govuk-frontend');
    const nunjucksEnv = nunjucks.configure([path.join(__dirname, '..', '..', 'views'), govUkFrontendPath], {
      autoescape: true,
      watch: this.developmentMode,
      express: app,
    });
    nunjucksEnv.addGlobal('govukRebrand', true);

    app.use((req, res, next) => {
      res.locals.pagePath = req.path;
      next();
    });
  }
}
