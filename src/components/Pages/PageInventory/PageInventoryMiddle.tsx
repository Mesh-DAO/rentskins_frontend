import Common from '@/components/Common'
import Modal from '@/components/Modal'
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
          <Common.Title
            bold={700}
            color="white"
            className="text-center font-bold"
          >
            Para ter acesso às suas skins e realizar transações, é necessário
            vincular seu inventário à Steam
          </Common.Title>
          <Modal.ConnectInventory.Main
            activator={
              <Common.Button className="mt-4 h-10 w-full rounded-xl border-none bg-mesh-color-primary-1400 font-semibold text-black">
                Conectar-se
              </Common.Button>
            }
          />
        </div>
      ) : (
        <CardSkinInventory steamid={`${steamid}`} />
      )}
    </div>
  )
}
