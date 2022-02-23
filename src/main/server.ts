#!/usr/bin/env node

import { app } from './app';

const { Logger } = require('@hmcts/nodejs-logging');

const logger = Logger.getLogger('server');

// TODO: set the right port for your application
const port: number = parseInt(process.env.PORT || '3120', 10);

app.listen(port, () => {
  logger.info(`Application started: http://localhost:${port}`);
});
