/* eslint-disable camelcase */
'use client'
import AllSkins from '@/components/Skins/AllSkins'
import IconArrowLeft from '@/components/Icons/IconArrowLeft'
import SkinFilters from '@/components/SkinFilters'
import { Title } from '@/components/Title'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Categorias() {
  const { skinName } = useParams()
  const nameCorrection = decodeURIComponent(skinName.replace(/\+/g, ' '))

  return (
    <div className="flex w-full justify-center">
      <div className="mx-auto my-6 flex w-4/5 flex-col gap-6">
        <Link href={'/'}>
          <Title className="w-fit stroke-mesh-color-neutral-300 text-mesh-color-neutral-300 transition-all hover:stroke-white hover:text-white">
            <IconArrowLeft /> Home &bull; {nameCorrection}
          </Title>
        </Link>
        <SkinFilters />
        <AllSkins itemsPerPage={15} />
      </div>
    </div>
  )
}
