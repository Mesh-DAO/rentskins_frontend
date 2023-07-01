/* eslint-disable camelcase */

import Image from 'next/image'
import { Title } from '../Title'
import ColoredLine from '../ColoredLine'
import { useQuery } from '@tanstack/react-query'
import { findBySkinsInventory } from '@/services/SkinService'

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
      {data?.data.descriptions !== undefined ? (
        data?.data.descriptions.map(
          ({ icon_url, market_name, name, name_color }: any, index: number) => {
            const primeiroName = name.split('|')[0]

            return (
              <div
                key={index}
                className="mb-2 w-[206px] gap-3 rounded-lg border-[1px] border-mesh-color-neutral-600 border-opacity-60 px-3 pb-4 pt-3 text-white"
              >
                <div>
                  <div className="bg-mesh-skin-gradient relative mb-4 flex flex-col items-center justify-center rounded-lg border-[1px] border-[#5E675E] bg-mesh-image-details">
                    <div
                      className="h-1 w-[80%] rounded-b"
                      style={{ background: `#${name_color}` }}
                    />
                    <Image
                      src={`https://steamcommunity-a.akamaihd.net/economy/image/${icon_url}`}
                      alt={`${primeiroName}`}
                      width={145}
                      height={109}
                    />
                  </div>

                  <div>
                    <div>
                      <Title bold={600} size="sm">
                        {market_name}
                      </Title>
                      <span className="text-xs font-medium text-mesh-color-neutral-200">
                        {primeiroName}
                      </span>
                    </div>
                    <p className="my-4 text-sm font-medium">
                      FT /{' '}
                      <span className="text-[13px] font-semibold text-mesh-color-neutral-200">
                        {'0.20566551'}
                      </span>
                    </p>
                  </div>
                  <ColoredLine position={0.8046551} />
                </div>
              </div>
            )
          },
        )
      ) : (
        <Title>Carregando...</Title>
      )}
    </div>
  )
}
