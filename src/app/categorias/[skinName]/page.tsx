/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
'use client'
import AllSkins from '@/components/Skins/AllSkins'
import IconArrowLeft from '@/components/Icons/IconArrowLeft'
import SkinFilters from '@/components/SkinFilters'
import { Title } from '@/components/Title'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { findAllSkinsByWeapon } from '@/services/SkinService'
import { useQuery } from '@tanstack/react-query'
import useComponentStore from '@/stores/components.store'
import { ISkins } from '@/interfaces/ISkins'
import AllSkeletonSkins from '@/components/Skins/AllSkeletonSkins'
import useFilterStore from '@/stores/filters.store'
import { useEffect, useState } from 'react'

export default function Categorias() {
  const { skinName } = useParams()
  const [filteredSkins, setFiltedSkins] = useState<ISkins[]>([])
  const nameCorrection = decodeURIComponent(skinName.replace(/\+/g, ' '))
  const { setAllSkinsCategory } = useComponentStore()

  const { selectedFilters, setAllSkinsFiltred, typeFilter, allSkinsFiltred } =
    useFilterStore()

  const { data, isLoading } = useQuery({
    queryKey: ['skinsWeapon'],
    queryFn: async () => {
      const data = await findAllSkinsByWeapon(nameCorrection)
      setAllSkinsCategory(data?.data as ISkins[])
      return data
    },
  })

  useEffect(() => {
    if (data) {
      const filteredItems = data?.data.filter((item) => {
        if (
          selectedFilters.wears?.length !== 0 &&
          !selectedFilters.wears?.includes(item.status_float)
        ) {
          return false
        }
        if (
          selectedFilters.prices.max !== null &&
          selectedFilters.prices.min !== null &&
          (Number(item.skin_price.replace(',', '.')) >
            selectedFilters.prices.max ||
            Number(item.skin_price.replace(',', '.')) <
              selectedFilters.prices.min)
        ) {
          return false
        }
        if (
          selectedFilters.categories?.length !== 0 &&
          !selectedFilters.categories?.some((categoryItem) =>
            item.skin_name.includes(categoryItem),
          )
        ) {
          return false
        }
        return true
      })
      setFiltedSkins(filteredItems)
      setAllSkinsFiltred(filteredItems, typeFilter)
    }
  }, [setAllSkinsFiltred, selectedFilters, typeFilter, data])

  return (
    <LayoutPage>
      <div className="flex w-full justify-center">
        <div className="mx-auto my-6 flex w-4/5 flex-col gap-6">
          <Link href={'/home'}>
            <Title className="w-fit stroke-mesh-color-neutral-300 text-mesh-color-neutral-300 transition-all hover:stroke-white hover:text-white">
              <IconArrowLeft /> Home &bull; {nameCorrection}
            </Title>
          </Link>
          <SkinFilters />
          {isLoading ? (
            <AllSkeletonSkins />
          ) : (
            <AllSkins
              skinsCategories={filteredSkins || allSkinsFiltred}
              itemsPerPage={15}
            />
          )}
        </div>
      </div>
    </div>
  )
}
