const request = require("supertest");

export default async (expectedStatus, params) => {
  const url = "/holidays";
  const API_KEY = "455b5a72c3bf47760106a8d34a52c49bf690cb19"; // TODO: this should be in a secret

  const res = await request(process.env.CALENDAR_API_ENDPOINT)
    .get(url)
    .query({
      api_key: API_KEY,
      country: params.country,
      year: params.year,
      month: params.month
    })
    .expect(expectedStatus);

  return {
    response: {
      statusCode: res.status,
      body: res.text
    }
  };
};
