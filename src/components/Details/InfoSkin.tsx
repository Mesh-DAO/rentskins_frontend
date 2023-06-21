import { Button } from '../Button'
import { IconCarrinho } from '../Icons'
import { InputRadio } from '../InputRadio'
import { Title } from '../Title'

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

export function InfoSkin({
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
          <Title className="text-2xl font-extrabold text-white">
            {skinName}
          </Title>
          <p className="text-mesh-color-neutral-200">{statusFloat}</p>
        </div>

        <div>
          <Title className="text-2xl font-extrabold text-white">
            R$: {skinPrice}
          </Title>
          <p className="text-mesh-color-neutral-200">Preço Total</p>
        </div>

        <div>
          <div className="flex items-center">
            <Title className="text-2xl font-extrabold text-white">
              R$: {parseFloat(skinPrice) / 10}
            </Title>
            <span className="ml-4 flex h-[24px] w-[42px] items-center justify-center rounded-full border border-none bg-mesh-color-others-green text-mesh-color-accent-600">
              10%
            </span>
          </div>
          <p className="text-mesh-color-neutral-200">Preço do Aluguel</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <Title className="text-mesh-color-neutral-200">
            Tendências de mercado
          </Title>
          <p className="text-white">Undefined</p>
        </div>

        <div className="flex justify-between">
          <Title className="text-mesh-color-neutral-200">ID Padrão</Title>
          <p className="text-white">{sellerId}</p>
        </div>

        <div className="flex justify-between">
          <Title className="text-mesh-color-neutral-200">Float</Title>
          <div className="flex items-center">
            <p className="text-white">{skinFloat}</p>
            <div
              className={`ml-2 h-[17px] w-[17px] rounded-[3px]`}
              style={{ background: `#${skinColor}` }}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <Title className="text-mesh-color-neutral-200">Tipo</Title>
          <p className="text-white">{skinCategory}</p>
        </div>

        <div className="flex justify-between">
          <Title className="text-mesh-color-neutral-200">Arma</Title>
          <p className="text-white">{skinWeapon}</p>
        </div>
      </div>

      <div className="mt-10">
        <Title className="font-semibold text-white">
          Selecione o período de Aluguel
        </Title>
        <div className="mt-4 flex gap-4">
          <InputRadio name="dias" radio="dia" style="cinza">
            <Title color="white">7 Dias</Title>
          </InputRadio>

          <InputRadio name="dias" style="cinza" radio="dia">
            <Title color="white">14 Dias</Title>
          </InputRadio>

          <InputRadio name="dias" style="cinza" radio="dia">
            <Title color="white">21 Dias</Title>
          </InputRadio>
        </div>
      </div>

      <div className="mt-10 flex gap-2">
        <Button className="h-11 w-[167px] border-none bg-mesh-color-primary-1400 font-semibold text-black">
          Alugar
        </Button>
        <Button className="h-11 w-[167px] border-none bg-mesh-color-primary-1400 font-semibold text-black">
          Comprar agora
        </Button>
        <Button className="h-11 w-11">
          <IconCarrinho />
        </Button>
      </div>
    </div>
  )
}
