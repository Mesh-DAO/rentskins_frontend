/* eslint-disable camelcase */
import { Title } from '../Title'
import ColoredLine from '../ColoredLine'
// import { useQuery } from '@tanstack/react-query'
// import { findBySkinsInventory } from '@/services/SkinService'
import { ModalAddSkin } from '../Modal'
import { CardSkin } from './CardSkin'
import { skins as data } from '@/Mock/skins.mock'
import useFilterStore from '@/stores/filters.store'

interface Props {
  steamid: string
}

export function CardSkinInventory({ steamid }: Props) {
  // const { data } = useQuery({
  //   queryKey: ['skinsInventory'],
  //   queryFn: async () => findBySkinsInventory(steamid),
  // })
  // const primeiroName = name.split('|')[0]
  const { inventoryFilter } = useFilterStore()
  const renderInventory = ({
    icon_url,
    market_name,
    name,
    name_color,
    tags,
    primeiroName,
    index,
  }: any) => (
    <ModalAddSkin
      key={index}
      image={icon_url}
      weapon={primeiroName}
      name={name}
      preco="2566"
      statusFloatText={''}
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

  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {data !== undefined ? (
        data.map(
          (
            { icon_url, market_name, name, name_color, tags }: any,
            index: number,
          ) => {
            const primeiroName = name.split('|')[0]
            if (inventoryFilter.length) {
              return inventoryFilter.map((filter) => {
                if (filter === tags[0].localized_tag_name) {
                  return renderInventory({
                    icon_url,
                    market_name,
                    name,
                    name_color,
                    tags,
                    primeiroName,
                    index,
                  })
                }
                return null
              })
            }
            return renderInventory({
              icon_url,
              market_name,
              name,
              name_color,
              tags,
              primeiroName,
              index,
            })
          },
        )
      ) : (
        <Title color="white">Algo deu errado</Title>
      )}
      {/* {data !== undefined ? (
        data.map(
          ({ icon_url, market_name, name, name_color }: any, index: number) => {
            const primeiroName = name.split('|')[0]
            // const statusFloatText = market_name.match(/\((.*?)\)/g)
            // statusFloatText[0].replace(/\(|\)/g, '')
            return (
              <ModalAddSkin
                key={index}
                image={icon_url}
                weapon={primeiroName}
                name={name}
                preco="2566"
                statusFloatText={''}
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
        <Title color="white">Algo deu errado</Title>
      )} */}
    </div>
  )
}
