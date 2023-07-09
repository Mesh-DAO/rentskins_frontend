import IconCart from '@/assets/Cart'
import IconEye from '@/assets/Eye'
import IconSteam from '@/assets/IconSteam'
import { CommonButton } from '@/components/Common/CommonButton'
import IconMagic from '@/components/Icons/IconMagicpen'
import Image from 'next/image'
import Link from 'next/link'
import ColoredLine from '../ColoredLine'

interface Props {
  sellerName: string
  skinPrice: string
  skinFloat: string
  skinWeapon: string
  skinColor: string
  skinImage: string
  itsRent?: boolean
}

export function OtherCard({
  sellerName,
  skinColor,
  skinImage,
  skinFloat,
  skinPrice,
  skinWeapon,
  itsRent,
}: Props) {
  return (
    <article className="flex w-72 flex-col gap-3 rounded-lg border-2 border-mesh-color-neutral-600 border-opacity-60 px-3 pb-4 pt-3 text-white">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-mesh-color-neutral-400 bg-mesh-gradient-black-pattern">
        <div
          className={`h-2 w-52 rounded-b-full`}
          style={{ backgroundColor: `#${skinColor}` }}
        />
        <div className="flex h-[154px] w-[206px] items-center justify-center">
          <Image
            src={skinImage}
            alt={sellerName}
            width={206}
            height={154}
            draggable={false}
          />
        </div>
      </div>

      <h1>{sellerName}</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-medium opacity-60">{skinWeapon}</h1>
        <div className="flex gap-2">
          {itsRent && (
            <CommonButton color="invisible">
              <IconMagic />
            </CommonButton>
          )}
          <CommonButton color="invisible" className="h-9 w-9">
            <IconSteam />
          </CommonButton>
          <CommonButton color="invisible" className="h-9 w-9">
            <IconEye />
          </CommonButton>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">R$: {skinPrice}</h1>
        <h1>
          <strong>FT / </strong>
          <span className="opacity-60">{skinFloat}</span>
        </h1>
      </div>
      <ColoredLine position={skinFloat} />
      <div className="flex items-center justify-end">
        <div className="flex gap-2">
          <CommonButton color="invisible" className="h-10 w-10 border-2">
            <IconCart />
          </CommonButton>
          <Link
            href={'/details'}
            className="flex items-center rounded-lg border-transparent bg-mesh-color-neutral-500 px-4 opacity-60 hover:opacity-100"
          >
            Comprar
          </Link>
        </div>
      </div>
    </article>
  )
}
