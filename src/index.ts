import { serve } from "@hono/node-server";

import { Hono } from "hono";
import { login } from "./api/authentication/auth.service.js";
const port = 3000;

const app = new Hono();

app.get("/api", (c) => c.text("GET /"));
app.post("/api", (c) => c.text("POST /"));
app.put("/api", (c) => c.text("PUT /"));
app.delete("/api", (c) => c.text("DELETE /"));

app.route("/api/users", login);

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
