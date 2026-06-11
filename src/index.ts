import Fastify from "fastify";
import FastifyJwt from "@fastify/jwt";

import { env } from "./config/env";
import { privateRoutes, publicRoutes } from "./routes";

const fastify = Fastify();

fastify.register(FastifyJwt, {
  secret: env.jwtAccessSecret,
  sign: {
    expiresIn: '2d',
  }
});

fastify.register(publicRoutes)
fastify.register(privateRoutes)


fastify
  .listen({
    port: env.port,
    host: "localhost"
  })
  .then(() => {
    console.log(`Server running on port ${env.port}`);
  });
