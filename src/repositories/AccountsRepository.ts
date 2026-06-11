import { prisma } from '../lib/prisma'

type CreateAccountData = {
  email: string
  name: string
  password: string
}

export class AccountsRepository {
  static findByEmail(email: string) {
    return prisma.account.findUnique({
      where: {
        email,
      },
    })
  }

  static create(data: CreateAccountData) {
    return prisma.account.create({
      data,
    })
  }
}
