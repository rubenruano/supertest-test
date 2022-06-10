import getArtworks from "../modules/collections/getArtworks";
import getArtworkById from "../modules/collections/getArtworkById";
import getArtworkSearch from "../modules/collections/getArtworkSearch";

export default () => {
  describe("Artworks collection", () => {
    test("Get artworks", async () => {
      const response = await getArtworks(200, { limit: 10 });
      const body = JSON.parse(response.response.body);
      expect(body.pagination.current_page).toBe(1);
      expect(body.pagination.limit).toBe(10);
    });

    test("Get artwork by id", async () => {
      let response = await getArtworks(200, { limit: 10 });
      let body = JSON.parse(response.response.body);
      const artwork = body.data[0];
      const artworkId = artwork.id;

      response = await getArtworkById(200, { id: artwork.id });
      body = JSON.parse(response.response.body);
      expect(body.data.id).toBe(artworkId);
    });

    test("Search artwork from the collection", async () => {
      const response = await getArtworkSearch(200, { q: "Cats" });
      let body = JSON.parse(response.response.body);

      expect(body.data.length).toBeGreaterThan(0);
    });
  });
};
