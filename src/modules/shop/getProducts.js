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

/***
curl --location --request POST 'https://api.artic.edu/api/v1/artworks/search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "q": "cats",
    "query": {
        "term": {
            "is_public_domain": true
        }
    }
}'

***/
