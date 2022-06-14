const request = require("supertest");

export default async (expectedStatus, params) => {
  const url = "/users";

  const res = await request(process.env.USERS_API_ENDPOINT)
    .post(url)
    .send({
      firstname: params.firstname,
      lastname: params.lastname,
      email: params.email
    })
    .expect(expectedStatus);

  return {
    response: {
      statusCode: res.status,
      body: res.text
    }
  };
};
