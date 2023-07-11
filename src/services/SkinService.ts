import { ISkins } from '@/interfaces/ISkins'
import { Api } from '@/providers'

export function findByAll() {
  return Api.get<ISkins[]>('/skins')
}

export function findById(id: string) {
  return Api.get(`/skins/${id}`)
}

export function findByWeapon(weapon: string) {
  return Api.get<ISkins[]>(`/skins/weapon/${weapon}`)
}

export function findBySkinsInventory(steamid: string) {
  return Api.get(`/skins/inventory/${steamid}`)
}

export async function findAllSkinsByWeapon(weapon: string) {
  return Api.get<ISkins[]>(`/v1/skins/weapon/${weapon}`)
}
