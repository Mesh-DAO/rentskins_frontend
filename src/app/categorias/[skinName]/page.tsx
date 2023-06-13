/* eslint-disable camelcase */
'use client'
import { skins } from '@/Mock'
import AllSkins from '@/components/AllSkins'
import IconArrowLeft from '@/components/Icons/IconArrowLeft'
import { LayoutPage } from '@/components/Shared'
import SkinFilters from '@/components/SkinFilters'
import { Title } from '@/components/Title'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Categorias() {
  const { skinName } = useParams()
  const skinsFiltered = skins.filter(({ name }) => name.includes(skinName))

  return (
    <LayoutPage>
      <div className="flex w-full justify-center">
        <div className="mx-auto mt-6 flex w-4/5 flex-col gap-6">
          <Link href={'/home'}>
            <Title className="stroke-mesh-color-neutral-400 text-mesh-color-neutral-400 transition-all hover:stroke-mesh-color-neutral-100 hover:text-mesh-color-neutral-100">
              <IconArrowLeft /> Home &bull; {skinName}
            </Title>
          </Link>
          <SkinFilters />
          <AllSkins skinsCategories={skinsFiltered} />
        </div>
      </div>
    </LayoutPage>
  )
}
