import { ISkins } from '@/interfaces/ISkins'
import { Api } from '@/providers'

export default class SkinService {
  public static findByAll() {
    return Api.get<ISkins[]>('/skins')
  }

  public static findById(id: string) {
    return Api.get(`/skins/${id}`)
  }

  public static findByWeapon(weapon: string) {
    return Api.get<ISkins[]>(`/skins/weapon/${weapon}`)
  }

  public static findBySkinsInventory(steamid: string) {
    return Api.get(`/skins/inventory/${steamid}`)
  }

  public static findAllSkinsByWeapon(weapon: string) {
    return Api.get<ISkins[]>(`/skins/weapon/${weapon}`)
  }

  public static findBySearchParameter(param: string) {
    return Api.get<ISkins[]>(`/skins/search/${param}`)
  }

  public static findAllSkinsByIdSeller(id: string) {
    return Api.get<ISkins[]>(`/skins/seller/user/${id}`)
  }
}
