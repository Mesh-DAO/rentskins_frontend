/* eslint-disable camelcase */
import LayoutPagination from '@/components/Layout/LayoutPagination'
import { ModalSkinShowcaseMain } from '@/components/Modal/ModalSkinShowcase/ModalSkinShowcaseMain'
import { ISkinInventory } from '@/interfaces/IInventorySkin'
import SkinService from '@/services/skin.service'
import useFilterStore from '@/stores/filters.store'
import Dimensions from '@/tools/dimensions.tool'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { CardSkin } from '.'
import ColoredLine from '../ColoredLine'

interface Props {
  steamid: string
}

export function CardSkinInventory({ steamid }: Props) {
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(16)
  const { inventoryTypeFilter } = useFilterStore()

  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['skinsInventory'],
    queryFn: async () =>
      SkinService.findBySkinsInventory(
        '76561198355549311',
        inventoryTypeFilter,
        Number(page),
        Number(itemsPerPage),
      ),
    enabled: !!steamid,
  })

  const checkPageDimensions = () => {
    Dimensions.setStatePerResolution(setItemsPerPage, [24, 15, 12, 9, 6])
  }

  useEffect(() => {
    window.addEventListener('resize', checkPageDimensions, false)
    checkPageDimensions()
    return () => window.removeEventListener('resize', checkPageDimensions)
  }, [])

  useEffect(() => {
    refetch()
  }, [page, itemsPerPage, inventoryTypeFilter, refetch])

  return (
    <div>
      <div className="ml-2 flex flex-wrap justify-start gap-4">
        {!isLoading && !isRefetching && data?.data ? (
          data.data.inventory.map(
            (
              {
                icon_url,
                name,
                name_color,
                market_name,
                ...rest
              }: ISkinInventory,
              index: number,
            ) => {
              const primeiroName = name.split('|')[0]
              const statusFloatText = market_name.match(/\((.*?)\)/g)
              const statusFloatTextMatch =
                statusFloatText && statusFloatText[0].replace(/\(|\)/g, '')

              const itemIsAWeapon =
                !rest.tags[0].name.includes('Sticker') &&
                !rest.tags[0].name.includes('Agent')

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
                    <div className="w-[206px] gap-2 rounded-lg border-[1px] border-mesh-color-neutral-600 border-opacity-60 px-3 pb-4 pt-3 text-white">
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
                            float={itemIsAWeapon ? '0.254665' : ''}
                          />
                        </div>
                        {itemIsAWeapon && <ColoredLine position={0.254665} />}
                      </CardSkin.Root>
                    </div>
                  }
                />
              )
            },
          )
        ) : (
          <CardSkin.Skeleton quantity={itemsPerPage} />
        )}
      </div>
      {!isLoading && data?.data.maxPages && (
        <LayoutPagination
          maxPages={data.data.maxPages}
          pageState={page}
          setPageState={setPage}
        />
      )}
    </div>
  )
}
