'use client'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import Common from '@/components/Common'
import IconArrowLeft from '@/components/Icons/IconArrowLeft'
import SkinFilters from '@/components/Others/SkinFilters'
import AllSkins from '@/components/Others/Skins/AllSkins'
import SkinService from '@/services/skin.service'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Categorias() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const nameCorrection = decodeURIComponent(search.replace(/\+/g, ' '))
  const [skins, setSkins] = useState([])

  const { data, isLoading } = useQuery({
    queryKey: ['skinsCategory'],
    queryFn: async () => {
      const data = await SkinService.findByAll()
      return data
    },
  })

  const setSearchFilter = () => {
    if (data?.data) {
      return data.data.filter((skin) => {
        if (!search) {
          return true
        }

        if (skin.skin_weapon.toLowerCase().includes(search.toLowerCase()) || skin.skin_name.toLowerCase().includes(search.toLowerCase())) {
          return true
        }

        return false
      })
    }
    return []
  }

  return (
    <div className="flex w-full justify-center">
      <div className="mx-auto my-6 flex w-4/5 flex-col gap-6">
        <Link href={'/home'}>
          <Common.Title className="w-fit stroke-mesh-color-neutral-300 text-mesh-color-neutral-300 transition-all hover:stroke-white hover:text-white">
            <IconArrowLeft /> Home &bull; {nameCorrection}
          </Common.Title>
        </Link>
        <SkinFilters />
        <AllSkins itemsPerPage={15} skinsCategories={setSearchFilter()}/>
      </div>
    </div>
  )
}
