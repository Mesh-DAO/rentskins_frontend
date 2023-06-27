/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
'use client'
import AllSkins from '@/components/Skins/AllSkins'
import IconArrowLeft from '@/components/Icons/IconArrowLeft'
import { LayoutPage } from '@/components/Shared'
import SkinFilters from '@/components/SkinFilters'
import { Title } from '@/components/Title'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { findAllSkinsByWeapon } from '@/services/SkinService'
import { useQuery } from '@tanstack/react-query'
import useComponentStore from '@/stores/components.store'
import { ISkins } from '@/interfaces/ISkins'
import AllSkeletonSkins from '@/components/Skins/AllSkeletonSkins'

export default function Categorias() {
  const { skinName } = useParams()
  const nameCorrection = decodeURIComponent(skinName.replace(/\+/g, ' '))
  const {
    setAllSkinsCategory,
    // skinsFiltredByPrice,
    skinsFiltredByCategory,
    // skinsFiltredByWear,
  } = useComponentStore()
  const { data, isLoading } = useQuery({
    queryKey: ['skinsWeapon'],
    queryFn: async () => {
      const data = await findAllSkinsByWeapon(nameCorrection)
      setAllSkinsCategory(data?.data as ISkins[])
      return data
    },
  })

  const allSkinCategories =
    skinsFiltredByCategory.length > 0 ? skinsFiltredByCategory : data?.data

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
            <AllSkins skinsCategories={allSkinCategories} itemsPerPage={15} />
          )}
        </div>
      </div>
    </LayoutPage>
  )
}
