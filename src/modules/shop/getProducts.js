const request = require("supertest");

export default async (expectedStatus, params) => {
  const url = "/products";

  const res = await request(process.env.API_ENDPOINT)
    .get(url)
    .query({ limit: params.limit })
    .expect(expectedStatus);

  return {
    response: {
      statusCode: res.status,
      body: res.text
    }
  };
};
