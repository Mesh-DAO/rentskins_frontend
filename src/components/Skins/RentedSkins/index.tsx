/* eslint-disable camelcase */
import { skins } from '@/Mock'
import { CardSkin } from '../../CardSkin'

interface skin {
  name: string
  name_color: string
  icon_url: string
}

export default function RentedSkins() {
  return (
    <div className="mt-6 flex w-full flex-wrap gap-5">
      {skins
        .slice(0, 3)
        .map(({ name, name_color, icon_url }: skin, idx: number) => (
          <CardSkin
            skinImage={icon_url}
            sellerName={name}
            skinColor={name_color}
            skinWeapon={''}
            skinFloat={''}
            skinPrice={''}
            itsRent={true}
            key={`${name}-${idx}`}
          />
        ))}
    </div>
  )
}
