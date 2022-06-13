import getHolidays from "../modules/calendar/getHolidays";

export default () => {
  describe("Calendar", () => {
    test("Get holidays", async () => {
      const response = await getHolidays(200, { country: "AR", year: 2022 });
      const json = JSON.parse(response.response.body);

      const holidays = json.response.holidays;
      expect(holidays.length).toBeGreaterThan(0);
      expect(holidays[0].date.iso).toBe("2022-01-01");
    });
  });
};
