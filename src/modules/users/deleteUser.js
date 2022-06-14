const request = require("supertest");

export default async (expectedStatus, params) => {
  const url = `/users/${params.id}`;

  const res = await request(process.env.USERS_API_ENDPOINT)
    .delete(url)
    .expect(expectedStatus);

  return {
    response: {
      statusCode: res.status,
      body: res.text
    }
  };
};
