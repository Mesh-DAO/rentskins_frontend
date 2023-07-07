/* eslint-disable camelcase */
import { findBySkinsInventory } from '@/services/SkinService'
import { useQuery } from '@tanstack/react-query'
import ColoredLine from '../ColoredLine'
import { ModalAddSkin } from '../Modal'
import { CardSkin } from './CardSkin'
import useFilterStore from '@/stores/filters.store'
import { Title } from '../Title'

interface Props {
  steamid: string
}

export function CardSkinInventory({ steamid }: Props) {
  const { inventoryFilter } = useFilterStore()
  const { data, isLoading } = useQuery({
    queryKey: ['skinsInventory'],
    queryFn: async () => findBySkinsInventory(steamid),
  })

  const applyFilter = () => {
    if (data?.data.descriptions) {
      return data?.data.descriptions.filter((skin: any) => {
        if (
          inventoryFilter.length !== 0 &&
          !inventoryFilter.includes(skin.tags[0].localized_tag_name)
        ) {
          return false
        }
        return true
      })
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {!isLoading ? (
        applyFilter().map(
          ({ icon_url, name, name_color, market_name }: any, index: number) => {
            const primeiroName = name.split('|')[0]
            const statusFloatText = market_name.match(/\((.*?)\)/g)
            const statusFloatTextMatch =
              statusFloatText && statusFloatText[0].replace(/\(|\)/g, '')

            return (
              <ModalAddSkin
                key={index}
                image={icon_url}
                weapon={primeiroName}
                name={name}
                preco="Undefined"
                statusFloatText={statusFloatTextMatch}
                float={'0.2555'}
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
        <Title color="white">Carregando...</Title>
      )}
    </div>
  )
}
