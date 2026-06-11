import { FastifyReply, FastifyRequest } from "fastify";
import { request } from "http";
import { date } from "zod";

export class ListOrdersController {
  static handle = async (request: FastifyRequest, reply: FastifyReply) => {
    return reply
      .code(200)
      .send({
        orders: [
          {
            id: crypto.randomUUID(),
            orderNumber: '#001',
            date: Date.now()
          },
          {
            id: crypto.randomUUID(),
            orderNumber: '#002',
            date: Date.now()
          },
          {
            id: crypto.randomUUID(),
            orderNumber: '#003',
            date: Date.now()
          },
        ]
      })
  }
}
