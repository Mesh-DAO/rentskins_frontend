'use client'
import { Card, InfoPerfil, InfoVendas, InfoSkin } from '@/components/Details'
import { LayoutPage } from '@/components/Shared/LayoutPage'
import { findById } from '@/services/SkinService'
import { Title } from '@/components/Title'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

// https://steamcommunity-a.akamaihd.net/economy/image/

export default function Details() {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['skin'],
    queryFn: () => findById(id),
  })

  console.log(data?.data)
  console.log(isLoading)

  return (
    <LayoutPage>
      <main className="w-full bg-mesh-color-others-black">
        {data !== undefined ? (
          <div className="mx-auto flex w-10/12 justify-center py-10">
            <div>
              <Card
                skinImage={data!.data.skin_image}
                skinName={data!.data.skin_name}
                skinLinkGame={data!.data.skin_link_game}
                skinLinkSteam={data!.data.skin_link_steam}
              />
              <InfoVendas />
            </div>

            <div className="ml-4 ">
              <InfoSkin
                skinName={data!.data.skin_name}
                skinPrice={data!.data.skin_price}
                skinFloat={data!.data.skin_float}
                skinCategory={data!.data.skin_category}
                skinWeapon={data!.data.skin_weapon}
                skinColor={data!.data.skin_color}
                sellerId={data!.data.seller_id}
                statusFloat={data!.data.status_float}
              />
              <InfoPerfil />
            </div>
          </div>
        ) : (
          <h1>Carregando...</h1>
        )}

        <div className="mx-auto flex w-10/12 py-10">
          <Title color="white">Semelhantes</Title>
        </div>
      </main>
    </LayoutPage>
  )
}
