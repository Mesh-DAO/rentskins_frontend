'use client'
import { Card, InfoPerfil, InfoVendas, InfoSkin } from '@/components/Details'
import { LayoutPage } from '@/components/Shared/LayoutPage'
import { findById } from '@/services/SkinService'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Details() {
  const { id } = useParams()

  useEffect((): any => {
    const find = async () => {
      const findId = await findById(id)
      console.log(findId)
    }

    return find
  }, [])

  return (
    <LayoutPage>
      <main className="w-full bg-mesh-color-others-black">
        <div className="mx-auto flex w-10/12 justify-center py-10">
          <div>
            <Card />
            <InfoVendas />
          </div>
          <div className="ml-4">
            <InfoSkin />
            <InfoPerfil />
          </div>
        </div>
      </main>
    </LayoutPage>
  )
}
