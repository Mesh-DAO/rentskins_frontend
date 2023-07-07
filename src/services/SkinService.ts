import { ISkins } from '@/interfaces/ISkins'
import { Api } from '@/providers'

export function findByAll() {
  return Api.get<ISkins[]>('/v1/skins')
}

export function findById(id: string) {
  return Api.get(`/v1/skins/${id}`)
}

export function findByWeapon(weapon: string) {
  return Api.get<ISkins[]>(`/v1/skins/weapon/${weapon}`)
}

export function findBySkinsInventory(steamid: string) {
  return Api.get(`/v1/skins/inventory/${steamid}`)
}

export async function findAllSkinsByWeapon(weapon: string) {
  return Api.get<ISkins[]>(`/v1/skins/weapon/${weapon}`)
}
