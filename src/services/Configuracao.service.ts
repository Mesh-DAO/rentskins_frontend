/* eslint-disable camelcase */
import { IConfig } from '@/interfaces/IConfig'
import { Api } from '@/providers'

export function createdConfig({
  owner_id,
  owner_name,
  owner_email,
  steam_guard,
  url_sell,
  url_trade,
}: IConfig) {
  return Api.post(`/v1/configuration`, {
    owner_id,
    owner_name,
    owner_email,
    steam_guard,
    url_sell,
    url_trade,
  })
}
