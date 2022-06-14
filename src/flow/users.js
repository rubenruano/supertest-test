import getUsers from "../modules/users/getUsers";
import getUser from "../modules/users/getUser";
import createUser from "../modules/users/createUser";
import deleteUser from "../modules/users/deleteUser";

export default () => {
  describe("Users", () => {
    test("CRUD with users", async () => {
      let response;

      // create user
      response = await createUser(201, {
        firstname: "TestName",
        lastname: "TestSurname",
        email: "test.email@gmail.com"
      });
      const addedUser = JSON.parse(response.response.body);

      const newUserId = addedUser.id;
      expect(newUserId).toBeDefined();
      expect(addedUser.firstname).toBe("TestName");
      expect(addedUser.lastname).toBe("TestSurname");
      expect(addedUser.email).toBe("test.email@gmail.com");

      // get user
      response = await getUser(200, {
        id: newUserId
      });
      const user = JSON.parse(response.response.body);
      expect(user.id).toBe(newUserId);
      expect(user.firstname).toBe("TestName");
      expect(user.lastname).toBe("TestSurname");
      expect(user.email).toBe("test.email@gmail.com");

      // get all user
      response = await getUsers(200, {
        page: 1,
        limit: 10
      });
      const users = JSON.parse(response.response.body);
      expect(users.length).toBeGreaterThan(0);

      // delete user
      response = await deleteUser(200, {
        id: newUserId
      });
      const deletedUser = JSON.parse(response.response.body);
      expect(deletedUser.id).toBe(newUserId);
      expect(deletedUser.firstname).toBe("TestName");
      expect(deletedUser.lastname).toBe("TestSurname");
      expect(deletedUser.email).toBe("test.email@gmail.com");
    });
  });
};
