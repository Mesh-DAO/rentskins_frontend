/* eslint-disable camelcase */
import { ISkins } from '@/interfaces/ISkins'
import { CardSkin } from '../CardSkin'
import { Title } from '../Title'

type PropsTypes = {
  isLoading: boolean
  data: {
    data: ISkins
  }
  data2: {
    data: ISkins[]
  }
}

export function SkinsSemelhantes({ isLoading, data2, data }: PropsTypes) {
  return (
    <div className="w-full pb-16">
      <Title color="white" bold={700} className="mb-6  text-[28px]">
        Semelhantes
      </Title>
      <div className="flex gap-4">
        {!isLoading &&
          data2?.data
            .filter(
              ({ skin_weapon, seller_id }: ISkins) =>
                skin_weapon === data!.data.skin_weapon &&
                seller_id !== data!.data.seller_id,
            )
            .map(
              (
                {
                  skin_image,
                  skin_name,
                  skin_color,
                  sale_type,
                  skin_float,
                  skin_price,
                }: ISkins,
                index: number,
              ) => {
                return (
                  <CardSkin
                    skinImage={skin_image}
                    sellerName={skin_name}
                    skinColor={skin_color}
                    skinCategory={sale_type}
                    skinFloat={skin_float}
                    skinPrice={skin_price}
                    key={`${skin_name}-${index}`}
                  />
                )
              },
            )}
      </div>
    </div>
  )
}
