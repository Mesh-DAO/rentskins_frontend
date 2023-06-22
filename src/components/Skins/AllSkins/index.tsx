/* eslint-disable camelcase */
// import { skins } from '@/Mock'

import { CardSkin } from '../../CardSkin'
import classNames from 'classnames'
// import { PageSelector } from '@/components/PageSelector'
// import useComponentStore from '@/stores/components.store'
import Link from 'next/link'
import { ISkins } from '@/interfaces/ISkins'
import { AxiosResponse } from 'axios'

interface IProps {
  skinsCategories: AxiosResponse<ISkins[], any> | undefined
  center?: boolean
  itemsPerPage: number
  isLoading: boolean
}

export default function AllSkins({
  skinsCategories,
  center = false,
  itemsPerPage = 10,
  isLoading,
}: IProps) {
  // const { setPageSelectorIndex, pageSelectorIndex } = useComponentStore()

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
          skinsCategories?.data.map(
            (
              {
                skin_name,
                skin_color,
                skin_image,
                skin_float,
                skin_price,
                skin_weapon,
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
                  <Link key={index} href={`/details/${id}`}>
                    <CardSkin
                      skinImage={skin_image}
                      sellerName={skin_name}
                      skinColor={skin_color}
                      skinWeapon={skin_weapon}
                      skinFloat={skin_float}
                      skinPrice={skin_price}
                      key={id}
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
