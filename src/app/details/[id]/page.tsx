'use client'
import { Card, InfoPerfil, InfoVendas, InfoSkin } from '@/components/Details'
import { LayoutPage } from '@/components/Shared/LayoutPage'
import { findById } from '@/services/SkinService'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export default function Details() {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['skin'],
    queryFn: () => findById(id),
  })

  return (
    <LayoutPage>
      <main className="w-full bg-mesh-color-others-black">
        {!isLoading && (
          <div className="mx-auto flex w-10/12 justify-center py-10">
            <div>
              <Card
                skinImage={data!.data.skin_image}
                skinName={data!.data.skin_name}
              />
              <InfoVendas />
            </div>
            <div className="ml-4">
              <InfoSkin
                skinName={data!.data.skin_name}
                price={data!.data.skin_price}
                float={data!.data.skin_float}
                type={data!.data.skin_category}
                arma={data!.data.skin_weapon}
                sellerId={data!.data.seller_id}
              />
              <InfoPerfil />
            </div>
          </div>
        )}
      </main>
    </LayoutPage>
  )
}
