/* eslint-disable camelcase */
import { skins } from '@/Mock'
<<<<<<<< HEAD:src/components/Skins/AllSkins/index.tsx
import { CardSkin } from '../../CardSkin'
========
import { CardSkin } from '../CardSkin'
import classNames from 'classnames'
>>>>>>>> origin/testing:src/components/AllSkins/index.tsx

interface skin {
  name: string
  name_color: string
  icon_url: string
}

interface IProps {
  skinsCategories?: skin[]
}

export default function AllSkins({ skinsCategories }: IProps) {
  const allSkins = skinsCategories || skins
  return (
    <div
      className={classNames('mt-6 flex w-full flex-wrap gap-5', {
        'mb-6 mt-0 w-auto': skinsCategories !== undefined,
      })}
    >
      {allSkins.map(({ name, name_color, icon_url }: skin, idx: number) => (
        <CardSkin
          iconUrl={icon_url}
          name={name}
          nameColor={name_color}
          key={`${name}-${idx}`}
        />
      ))}
    </div>
  )
}
