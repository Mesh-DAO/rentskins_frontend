import { Api } from '@/providers'

export function findByAll() {
  return Api.get('/v1/skins')
}

export function findById(id: string) {
  return Api.get(`/v1/skins/${id}`)
}
