/* eslint-disable camelcase */
import { IConfig } from '@/interfaces/IConfig'
import { Api } from '@/providers'

export async function findByConfigUserId(id: string) {
  return Api.get<IConfig>(`/v1/configuration/user/${id}`)
}

export async function createConfig({
  owner_id,
  owner_name,
  owner_email,
  steam_guard,
  url_sell,
  url_trade,
  agreed_with_emails,
  agreed_with_terms,
}: IConfig) {
  return Api.post(`/v1/configuration`, {
    owner_id,
    owner_name,
    owner_email,
    steam_guard,
    url_sell,
    url_trade,
    agreed_with_emails,
    agreed_with_terms,
  })
}
