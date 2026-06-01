import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";

import { env } from "./config/env";
import { appRoutes } from "./routes";

const app = fastify();

app.register(fastifyJwt, {
  secret: env.jwtAccessSecret
});

app.register(appRoutes);

app
  .listen({
    port: env.port,
    host: "0.0.0.0"
  })
  .then(() => {
    console.log(`Server running on port ${env.port}`);
  });
