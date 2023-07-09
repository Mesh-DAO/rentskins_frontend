import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { IconCarrinho } from '@/components/Icons'
// import { InputRadio } from '../InputRadio'

type PropsTypes = {
  skinName: string
  skinPrice: string
  skinFloat: string
  skinCategory: string
  skinWeapon: string
  skinColor: string
  sellerId: string
  statusFloat: string
}

export function PageDetailsSkin({
  skinName,
  skinPrice,
  skinFloat,
  skinCategory,
  skinWeapon,
  sellerId,
  statusFloat,
  skinColor,
}: PropsTypes) {
  return (
    <div className="rounded-lg border-2 border-mesh-color-neutral-600 px-4 py-3">
      <div className="space-y-4">
        <div>
          <CommonTitle className="text-2xl font-extrabold text-white">
            {skinName}
          </CommonTitle>
          <p className="text-mesh-color-neutral-200">{statusFloat}</p>
        </div>

        <div>
          <CommonTitle className="text-2xl font-extrabold text-white">
            R$: {skinPrice}
          </CommonTitle>
          <p className="text-mesh-color-neutral-200">Preço Total</p>
        </div>

        <div>
          <div className="flex items-center">
            <CommonTitle className="text-2xl font-extrabold text-white">
              R$: {parseFloat(skinPrice) / 10}
            </CommonTitle>
            <span className="ml-4 flex h-[24px] w-[42px] items-center justify-center rounded-full border border-none bg-mesh-color-others-green text-mesh-color-accent-600">
              10%
            </span>
          </div>
          <p className="text-mesh-color-neutral-200">Preço do Aluguel</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <CommonTitle className="text-mesh-color-neutral-200">
            Tendências de mercado
          </CommonTitle>
          <p className="text-white">Undefined</p>
        </div>

        <div className="flex justify-between">
          <CommonTitle className="text-mesh-color-neutral-200">
            ID Padrão
          </CommonTitle>
          <p className="text-white">{sellerId}</p>
        </div>

        <div className="flex justify-between">
          <CommonTitle className="text-mesh-color-neutral-200">
            Float
          </CommonTitle>
          <div className="flex items-center">
            <p className="text-white">{skinFloat}</p>
            <div
              className={`ml-2 h-[17px] w-[17px] rounded-[3px]`}
              style={{ background: `#${skinColor}` }}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <CommonTitle className="text-mesh-color-neutral-200">
            Tipo
          </CommonTitle>
          <p className="text-white">{skinCategory}</p>
        </div>

        <div className="flex justify-between">
          <CommonTitle className="text-mesh-color-neutral-200">
            Arma
          </CommonTitle>
          <p className="text-white">{skinWeapon}</p>
        </div>
      </div>

      <div className="mt-10">
        <CommonTitle className="font-semibold text-white">
          Selecione o período de Aluguel
        </CommonTitle>
        <div className="mt-4 flex gap-4">
          {/* <InputRadio name="dias" radio="dia" style="cinza">
            <CommonTitle color="white">7 Dias</CommonTitle>
          </InputRadio>

          <InputRadio name="dias" style="cinza" radio="dia">
            <CommonTitle color="white">14 Dias</CommonTitle>
          </InputRadio>

          <InputRadio name="dias" style="cinza" radio="dia">
            <CommonTitle color="white">21 Dias</CommonTitle>
          </InputRadio> */}
        </div>
      </div>

      <div className="mt-10 flex gap-2">
        <CommonButton className="h-11 w-[167px] border-none bg-mesh-color-primary-1400 font-semibold text-black">
          Alugar
        </CommonButton>
        <CommonButton className="h-11 w-[167px] border-none bg-mesh-color-primary-1400 font-semibold text-black">
          Comprar agora
        </CommonButton>
        <CommonButton className="h-11 w-11">
          <IconCarrinho />
        </CommonButton>
      </div>
    </div>
  )
}
