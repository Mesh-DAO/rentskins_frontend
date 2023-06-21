/* eslint-disable camelcase */
'use client'
import { Card, InfoPerfil, InfoVendas, InfoSkin } from '@/components/Details'
import { SkinsSemelhantes } from '@/components/SkinsSemelhantes'
import { Title } from '@/components/Title'
import { LayoutPage } from '@/components/Shared/LayoutPage'
import { findByAll, findById } from '@/services/SkinService'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { IconArrow } from '@/components/Icons'
import Link from 'next/link'

// https://steamcommunity-a.akamaihd.net/economy/image/

export default function Details() {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['skin', id],
    queryFn: async () => await findById(id),
  })

  const { data: data2 } = useQuery({
    queryKey: ['skins'],
    queryFn: async () => await findByAll(),
  })

  return (
    <LayoutPage>
      {!isLoading && data?.data ? (
        <main className="mx-auto w-10/12 bg-mesh-color-others-black">
          <div className="mt-8 flex items-center gap-4">
            <Link href="/">
              <IconArrow />
            </Link>
            <Title color="cinza">
              Home &bull; {data?.data.skin_weapon} &bull;{' '}
              <span className="text-[#49E671]">{data?.data.skin_name}</span>
            </Title>
          </div>

          <div className="mx-auto grid w-full grid-cols-5 py-10">
            <div className="col-span-3">
              <Card
                skinImage={data!.data.skin_image}
                skinName={data!.data.skin_name}
                skinLinkGame={data!.data.skin_link_game}
                skinLinkSteam={data!.data.skin_link_steam}
              />

              <div>
                <InfoVendas />
              </div>
            </div>
            <div className="col-span-2 ml-4">
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
          <SkinsSemelhantes isLoading={isLoading} data2={data2!} data={data} />
        </main>
      ) : (
        <Title>Carregando...</Title>
      )}
    </LayoutPage>
  )
}
