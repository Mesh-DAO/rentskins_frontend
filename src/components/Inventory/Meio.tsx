import { useQuery } from '@tanstack/react-query'
import { Button } from '../Button'
import { ModalConnectInventario } from '../Modal'
import { Title } from '../Title'
import { findByConfigUserId } from '@/services/Configuracao.service'
import useUserStore from '@/stores/user.store'
import { CardSkinInventory } from './CardSkinInventory'

export function Meio() {
  const {
    user: { steamid },
  } = useUserStore()

  const { data } = useQuery({
    queryKey: ['config'],
    queryFn: async () => findByConfigUserId(steamid as string),
    enabled: !!steamid,
  })

  return (
    <div className="min-h-[1000px]">
      {!data || data.status !== 200 ? (
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
        <CardSkinInventory steamid={`${steamid}`} />
      )}
    </div>
  )
}
