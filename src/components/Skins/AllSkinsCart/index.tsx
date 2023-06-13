/* eslint-disable camelcase */
import { skins } from '@/Mock'
import CartSkinCard from '@/components/CartSkinCard'

interface skin {
  name: string
  name_color: string
  icon_url: string
}

export default function AllSkinsCart() {
  return (
    <div className="flex w-[798px] flex-col items-start gap-6">
      {skins
        .slice(0, 6)
        .map(({ name, name_color, icon_url }: skin, idx: number) => (
          <CartSkinCard
            iconUrl={icon_url}
            name={name}
            nameColor={name_color}
            key={`${name}-${idx}`}
          />
        ))}
    </div>
  )
}
