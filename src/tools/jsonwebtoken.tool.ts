import jwt from 'jsonwebtoken'

export default class JsonWebToken {
  public static create(item: object) {
    return jwt.sign(item, 'secret')
  }

  public static verify(token: string) {
    const data = jwt.verify(token, 'secret')
    return data
  }
}
