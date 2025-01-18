import { Hono } from "hono";
import type { components } from "../../schema.js";

type LoginResponse = components["schemas"]["User"];

export const login = new Hono();

login.post("/login", async (c) => {
  //   const body = await c.req.json<{
  //     user: components["schemas"]["LoginUser"];
  //   }>();

  console.log(await c.req.parseBody());

  const user: LoginResponse = {
    email: "email",
    username: "name",
    token: "token",
    bio: "bio",
    image: "image",
  };

  return c.json({ user });
});
