'use client'

import { useQuery } from '@tanstack/react-query'
import { Button } from '../Button'
import { ModalConnectInventario } from '../Modal'
import { ModalAddSkin } from '../Modal/ModalAddSkin'
import { Title } from '../Title'
import { CardSkinInventory } from './CardSkinInventory'
import { findByConfigUserId } from '@/services/Configuracao.service'
import LocalStorage from '@/tools/localstorage.tool'
import JsonWebToken from '@/tools/jsonwebtoken.tool'

export function Meio() {
  const token = LocalStorage.get('token')
  const tokenWeb = JsonWebToken.verify(token)
  const { steamid }: any = tokenWeb

  const { data } = useQuery({
    queryKey: ['config', steamid],
    queryFn: async () => findByConfigUserId(steamid),
    enabled: !!steamid,
  })

  return (
    <div className="min-h-[1000px]">
      {data?.status !== 200 ? (
        <div className="mx-auto w-[60%] rounded-xl bg-mesh-color-others-eerie-black px-5 py-5">
          <Title bold={700} color="white" className="text-center font-bold">
            Para ter acesso às suas skins e realizar transações, é necessário
            vincular seu inventário à Steam
          </Title>
          <ModalConnectInventario
            activator={
              <Button className="mt-4 h-10 w-full rounded-xl border-none bg-mesh-color-primary-1400 font-semibold text-black">
                Conectar-se
              </Button>
            }
          />
        </div>
      ) : (
        <div className="flex justify-center space-x-6">
          <ModalAddSkin
            activator={CardSkinInventory({ nameColor: 'DFDFDF' })}
          />
          <ModalAddSkin
            activator={CardSkinInventory({ nameColor: 'DFDFDF' })}
          />
        </div>
      )}
    </div>
  )
}
