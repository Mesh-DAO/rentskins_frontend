import jwt from 'jsonwebtoken'

export default class JsonWebToken {
  public static create(item: object) {
    return jwt.sign(item, process.env.NEXT_PUBLIC_SECRET_KEY as string)
  }

  public static verify(token: string) {
    return jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY as string)
  }
}
