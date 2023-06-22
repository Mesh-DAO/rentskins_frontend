import { ISkins } from '@/interfaces/ISkins';
import { Api } from '@/providers';

export function findByAll() {
  return Api.get<ISkins[]>('/v1/skins');
}

export function findById(id: string) {
  return Api.get<ISkins>(`/v1/skins/${id}`);
}

export async function findAllSkinsByWeapon(weapon: string) {
  return Api.get<ISkins[]>(`/v1/skins/${weapon}`);
}
