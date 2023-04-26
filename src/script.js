const newman = require('newman');
const reporter = require('newman-reporter-json-summary');
const htmlextra = require('newman-reporter-htmlextra');
require('dotenv').config();
const createMessage = require('./postmanMattermostReporter')

newman.run({
  collection: process.env.API_COLLECTION_URL,
  environment: process.env.ENVIRONMENT_URL,
  reporters: ['json-summary', 'htmlextra'],
  reporter: {
    htmlextra: {
      export: './newman/report.html',
      plugin: htmlextra
    },
    jsonSummary: {
      export: './newman/newman-summary-report.json',
      plugin: reporter
    }
  }
}, function (err) {
  if (err) {
    throw err;
  }
  else{
    setTimeout(() => {
      createMessage()
    }, 3000);
  }
});