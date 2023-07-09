/* eslint-disable camelcase */
import Common from '@/components/Common'

type Props = {
  market_name: string
  primeiroName: string
  float: string
}

export function CardSkinContent({ market_name, primeiroName, float }: Props) {
  return (
    <>
      <div>
        <Common.Title bold={600} size="sm">
          {market_name}
        </Common.Title>
        <span className="text-xs font-medium text-mesh-color-neutral-200">
          {primeiroName}
        </span>
      </div>
      <p className="my-4 text-sm font-medium">
        FT /{' '}
        <span className="text-[13px] font-semibold text-mesh-color-neutral-200">
          {float}
        </span>
      </p>
    </>
  )
}
