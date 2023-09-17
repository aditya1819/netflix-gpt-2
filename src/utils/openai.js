import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_API_KEY,
  // since we are calling the API from browser
  dangerouslyAllowBrowser: true
});
