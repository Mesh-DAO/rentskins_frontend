import { Api } from '@/providers'

export function findByAll() {
  return Api.get('/v1/skins')
}
