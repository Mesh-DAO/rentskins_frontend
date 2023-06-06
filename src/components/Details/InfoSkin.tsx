import { Button } from '../Button'
import { IconCarrinho } from '../Icons'
import { InputRadio } from '../InputRadio'
import { Title } from '../Title'

export function InfoSkin() {
  return (
    <div className="min-w-[435px] rounded-lg border-2 border-[#3E423A] px-4 py-3">
      <div className="space-y-4">
        <div>
          <Title className="text-2xl font-extrabold text-white">
            Kumicho Dragon
          </Title>
          <p className="text-mesh-dark-3">Nova de fábrica</p>
        </div>

        <div>
          <Title className="text-2xl font-extrabold text-white">R$825</Title>
          <p className="text-mesh-dark-3">Preço Total</p>
        </div>

        <div>
          <div className="flex items-center">
            <Title className="text-2xl font-extrabold text-white">
              R$82,50
            </Title>
            <span className="ml-4 flex h-[24px]  w-[42px] items-center justify-center rounded-full border border-none bg-[#243D30] text-[#6CEA8B]">
              10%
            </span>
          </div>
          <p className="text-mesh-dark-3">Preço do Aluguel</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <Title className="text-mesh-dark-3">Tendências de mercado</Title>
          <p className="text-white">R$750</p>
        </div>

        <div className="flex justify-between">
          <Title className="text-mesh-dark-3">ID Padrão</Title>
          <p className="text-white">952</p>
        </div>

        <div className="flex justify-between">
          <Title className="text-mesh-dark-3">Float</Title>
          <div className="flex items-center">
            <p className="text-white">0.1095228</p>
            <div className="ml-2 h-[17px] w-[17px] rounded-[3px] bg-mesh-light-2" />
          </div>
        </div>

        <div className="flex justify-between">
          <Title className="text-mesh-dark-3">Tipo</Title>
          <p className="text-white">Pistola</p>
        </div>

        <div className="flex justify-between">
          <Title className="text-mesh-dark-3">Arma</Title>
          <p className="text-white">Desert Eagle</p>
        </div>
      </div>

      <div className="mt-10">
        <Title className="font-semibold text-white">
          Selecione o período de Aluguel
        </Title>
        <div className="mt-4 flex gap-4">
          <InputRadio name="dias" style="cinza" radio="dia">
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
        <Button className="h-11 w-[167px] font-semibold text-white">
          Alugar
        </Button>
        <Button className="h-11 w-[167px] bg-dark-lime-green font-semibold text-black">
          Comprar agora
        </Button>
        <Button className="h-11 w-11">
          <IconCarrinho />
        </Button>
      </div>
    </div>
  )
}
