const request = require("supertest");

export default async (expectedStatus, params) => {
  const url = "/users";

  const res = await request(process.env.USERS_API_ENDPOINT)
    .get(url)
    .query({ page: params.page, limit: params.limit })
    .expect(expectedStatus);

  return {
    response: {
      statusCode: res.status,
      body: res.text
    }
  };
};
