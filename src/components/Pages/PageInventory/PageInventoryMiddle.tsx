'use client'
import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { ModalConnectInventoryMain } from '@/components/Modal/ModalConnectInventory/ModalConnectInventoryMain'
import { CardSkinInventory } from '@/components/Others/CardSkin/CardSkinInventory'
import { findByConfigUserId } from '@/services/Configuracao.service'
import useUserStore from '@/stores/user.store'
import { useQuery } from '@tanstack/react-query'

export function PageInventoryMiddle() {
  const {
    user: { steamid },
  } = useUserStore()

  const { data } = useQuery({
    queryKey: ['config'],
    queryFn: async () => findByConfigUserId(steamid as string),
    enabled: !!steamid,
  })

  return (
    <div className="mb-6 min-h-[1000px]">
      {!data || data.status !== 200 ? (
        <div className="mx-auto w-[60%] rounded-xl bg-mesh-color-others-eerie-black px-5 py-5">
          <CommonTitle
            bold={700}
            color="white"
            className="text-center font-bold"
          >
            Para ter acesso às suas skins e realizar transações, é necessário
            vincular seu inventário à Steam
          </CommonTitle>
          <ModalConnectInventoryMain
            activator={
              <CommonButton className="mt-4 h-10 w-full rounded-xl border-none bg-mesh-color-primary-1400 font-semibold text-black">
                Conectar-se
              </CommonButton>
            }
          />
        </div>
      ) : (
        <CardSkinInventory steamid={`${steamid}`} />
      )}
    </div>
  )
}
