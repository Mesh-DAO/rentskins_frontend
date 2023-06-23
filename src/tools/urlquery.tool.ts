import queryString from 'query-string'

export default class URLQuery {
  public static addQuery(key: string, value: string) {
    const query = queryString.parse(location.search)

    query[key] = [value]

    location.search = queryString.stringify(query)
  }

  public static removeQuery(key: string) {
    location.search = queryString.exclude(location.search, [key])
  }
}
