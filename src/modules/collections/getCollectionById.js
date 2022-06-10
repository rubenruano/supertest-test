const request = require("supertest");

export default async (expectedStatus, params) => {
  const url = `/artworks/${params.id}`;

  const res = await request(process.env.API_ENDPOINT)
    .get(url)
    .expect(expectedStatus);

  return {
    response: {
      statusCode: res.status,
      body: res.text
    }
  };
};
