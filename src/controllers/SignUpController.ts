import { hash } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { AccountsRepository } from '../repositories/AccountsRepository'

export class SignUpController {
  static schema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(8),
  })

  static handle = async (request: FastifyRequest, reply: FastifyReply) => {
    const result = this.schema.safeParse(request.body)

    if (!result.success) {
      return reply
        .code(400)
        .send({ errors: result.error.issues })
    }

    const { name, email, password } = result.data

    const accountAlreadyExists = await AccountsRepository.findByEmail(email)

    if (accountAlreadyExists) {
      return reply
        .code(409)
        .send({ error: 'Account already exists' })
    }

    const passwordHash = await hash(password, 8)

    const account = await AccountsRepository.create({
      name,
      email,
      password: passwordHash,
    })

    return reply
      .code(201)
      .send({
        account: {
          id: account.id,
          name: account.name,
          email: account.email,
        },
      })
  }
}
