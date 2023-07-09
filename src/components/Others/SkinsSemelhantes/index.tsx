/* eslint-disable camelcase */
import { CommonTitle } from '@/components/Common/CommonTitle'
import { ISkins } from '@/interfaces/ISkins'
import Link from 'next/link'
import { OtherCard } from '../OtherCard/OtherCard'

type PropsTypes = {
  isLoading: boolean
  data: {
    data: {
      [index: number]: ISkins
    }
  }
  data2: {
    data: ISkins[]
  }
}

export function SkinsSemelhantes({ isLoading, data2, data }: PropsTypes) {
  const find = data2?.data.filter(
    ({ skin_weapon, seller_id }: ISkins) =>
      skin_weapon === data!.data[0].skin_weapon &&
      seller_id !== data!.data[0].seller_id,
  )

  return (
    <>
      <CommonTitle color="white" bold={700} className="mb-6  text-[28px]">
        Semelhantes
      </CommonTitle>
      <div className="w-full pb-16">
        <div className="flex gap-4">
          {!isLoading && find?.length > 0 ? (
            find.map(
              (
                {
                  skin_image,
                  skin_name,
                  skin_color,
                  skin_float,
                  skin_price,
                  skin_weapon,
                  id,
                }: ISkins,
                index: number,
              ) => {
                return (
                  <Link href={`/details/${id}`} key={`${skin_name}-${index}`}>
                    <OtherCard
                      skinImage={skin_image}
                      sellerName={skin_name}
                      skinColor={skin_color}
                      skinWeapon={skin_weapon}
                      skinFloat={skin_float}
                      skinPrice={skin_price}
                    />
                  </Link>
                )
              },
            )
          ) : (
            <CommonTitle color="white">
              Não há nenhuma skin semelhante
            </CommonTitle>
          )}
        </div>
      </div>
    </>
  )
}
