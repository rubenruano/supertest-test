import getProducts from "../modules/shop/getProducts";

export default () => {
  describe("Shop", () => {
    test("Get shops", async () => {
      const response = await getProducts(200, { limit: 10 });
      const body = JSON.parse(response.response.body);

      expect(body.pagination.current_page).toBe(1);
      expect(body.pagination.limit).toBe(10);
    });
  });
};
