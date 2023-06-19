/* eslint-disable camelcase */
// import { skins } from '@/Mock'

import { CardSkin } from '../../CardSkin'
import classNames from 'classnames'
// import { PageSelector } from '@/components/PageSelector'
// import useComponentStore from '@/stores/components.store'
import { useQuery } from '@tanstack/react-query'
import { findByAll } from '@/services/SkinService'
import Link from 'next/link'
import { ISkins } from '@/interfaces/ISkins'

interface skin {
  id: string
  seller_name: string
  skin_price: string
  skin_float: string
  skin_category: string
  name_color: string
  skin_image: string
  sale_type: string
}

interface IProps {
  skinsCategories?: skin[]
  center?: boolean
  itemsPerPage: number
}

export default function AllSkins({
  skinsCategories,
  center = false,
  itemsPerPage = 10,
}: IProps) {
  // const { setPageSelectorIndex, pageSelectorIndex } = useComponentStore()

  const { data, isLoading } = useQuery({
    queryKey: ['skins'],
    queryFn: findByAll,
  })

  // const allSkins = skinsCategories || skins

  // const allSkinsFilter = allSkins.filter(
  //   ({ name }: skin) =>
  //     !name.includes('Coin') &&
  //     !name.includes('Pin') &&
  //     !name.includes('Graffiti'),
  // )

  return (
    <div className="flex w-11/12 flex-col items-center">
      <div
        className={classNames('mt-6 flex w-full flex-wrap gap-5 ', {
          'mb-6 mt-0 w-auto': skinsCategories !== undefined,
          'justify-center': center,
        })}
      >
        {!isLoading &&
          data?.data.map(
            (
              {
                skin_name,
                name_color,
                skin_image,
                skin_float,
                skin_price,
                sale_type,
                skin_category,
                id,
              }: ISkins,
              index: number,
            ) => {
              // const itemIndex = index + 1
              // if (
              //   itemIndex > itemsPerPage * (pageSelectorIndex - 1) &&
              //   itemIndex <= itemsPerPage * pageSelectorIndex
              // )
              return (
                <>
                  <Link target="_blank" href={`/details/${id}`}>
                    <CardSkin
                      skinImage={skin_image}
                      sellerName={skin_name}
                      nameColor={name_color}
                      skinCategory={sale_type}
                      skinFloat={skin_float}
                      skinPrice={skin_price}
                      key={`${skin_name}-${index}`}
                    />
                  </Link>
                </>
              )
              // return null
            },
          )}
      </div>
      {/* <PageSelector
        pages={allSkinsFilter.length / itemsPerPage}
        handleOnChange={(event) =>
          setPageSelectorIndex(event.target.value as unknown as number)
        }
      /> */}
    </div>
  )
}
