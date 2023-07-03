/* eslint-disable camelcase */

import { Title } from '../Title'
import ColoredLine from '../ColoredLine'
import { useQuery } from '@tanstack/react-query'
import { findBySkinsInventory } from '@/services/SkinService'
import { ModalAddSkin } from '../Modal'
import { CardSkin } from './CardSkin'

interface Props {
  steamid: string
}

export function CardSkinInventory({ steamid }: Props) {
  const { data } = useQuery({
    queryKey: ['skinsInventory'],
    queryFn: async () => findBySkinsInventory(steamid),
  })

  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {data !== undefined ? (
        data?.data.descriptions.map(
          ({ icon_url, market_name, name, name_color }: any, index: number) => {
            const primeiroName = name.split('|')[0]
            return (
              <ModalAddSkin
                key={index}
                activator={
                  <div className="mb-2 w-[206px] gap-3 rounded-lg border-[1px] border-mesh-color-neutral-600 border-opacity-60 px-3 pb-4 pt-3 text-white">
                    <CardSkin.Root>
                      <CardSkin.Image
                        icon_url={icon_url}
                        name_color={name_color}
                        primeiroName={primeiroName}
                      />
                      <CardSkin.Content
                        market_name={market_name}
                        primeiroName={primeiroName}
                        float="0.254665"
                      />
                    </CardSkin.Root>
                    <ColoredLine position={0.254665} />
                  </div>
                }
              />
            )
          },
        )
      ) : (
        <Title color="white">Algo deu errado</Title>
      )}
    </div>
  )
}
