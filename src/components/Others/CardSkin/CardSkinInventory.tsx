/* eslint-disable camelcase */
import { ModalSkinShowcaseMain } from '@/components/Modal/ModalSkinShowcase/ModalSkinShowcaseMain'
import { ISkinInventory } from '@/interfaces/IInventorySkin'
import SkinService from '@/services/skin.service'
import { useQuery } from '@tanstack/react-query'
import { CardSkin } from '.'
import ColoredLine from '../ColoredLine'

interface Props {
  steamid: string
}

export function CardSkinInventory({ steamid }: Props) {
  // const { inventoryFilter } = useFilterStore()
  const { data, isLoading } = useQuery({
    queryKey: ['skinsInventory'],
    queryFn: async () => SkinService.findBySkinsInventory(steamid),
  })

  return (
    <div className="ml-2 flex flex-wrap justify-start gap-4 after:flex-auto">
      {!isLoading ? (
        data?.data.map(
          (
            { icon_url, name, name_color, market_name }: ISkinInventory,
            index: number,
          ) => {
            const primeiroName = name.split('|')[0]
            const statusFloatText = market_name.match(/\((.*?)\)/g)
            const statusFloatTextMatch =
              statusFloatText && statusFloatText[0].replace(/\(|\)/g, '')

            return (
              <ModalSkinShowcaseMain
                key={index}
                image={icon_url}
                weapon={primeiroName}
                name={name}
                preco="Undefined"
                statusFloatText={statusFloatTextMatch as string}
                float={'0.2555'}
                activator={
                  <div className="mb-2 w-[206px] gap-2 rounded-lg border-[1px] border-mesh-color-neutral-600 border-opacity-60 px-3 pb-4 pt-3 text-white">
                    <CardSkin.Root classname="flex flex-col justify-between">
                      <div className="h-full">
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
                      </div>
                      <ColoredLine position={0.254665} />
                    </CardSkin.Root>
                  </div>
                }
              />
            )
          },
        )
      ) : (
        <CardSkin.Skeleton quantity={12} />
      )}
    </div>
  )
}
