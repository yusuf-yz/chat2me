import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-44OVqRZJ3uD2qP15cTY6qHpB',
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

module.exports = openai;
