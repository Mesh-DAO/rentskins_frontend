import { CheckBox } from '../CheckBox'
import { InputRadio } from '../InputRadio'
import { Title } from '../Title'

export function LadoEsquerdo() {
  return (
    <div>
      <div>
        <Title color="white" className="text-3xl font-extrabold">
          Inventário
        </Title>
        <p className="mt-8 font-inter text-lg font-semibold text-white">
          Filtros
        </p>
      </div>

      <div className="mt-6 w-56 space-y-4 border-b border-t border-mesh-color-neutral-300 py-6">
        <InputRadio
          style="filter"
          name="skin"
          radio="filter"
          value="lowestPrice"
        >
          <Title color="white" className="ml-8">
            Menor preço
          </Title>
        </InputRadio>
        <InputRadio
          style="filter"
          name="skin"
          radio="filter"
          value="biggestPrice"
        >
          <Title color="white" className="ml-8">
            Maior preço
          </Title>
        </InputRadio>
        <InputRadio
          style="filter"
          name="skin"
          radio="filter"
          value="biggestFloat"
        >
          <Title color="white" className="ml-8">
            Melhor float
          </Title>
        </InputRadio>

        <InputRadio style="filter" name="skin" radio="filter" value={undefined}>
          <Title color="white" className="ml-8">
            Limpar
          </Title>
        </InputRadio>
      </div>

      <div className="flex flex-col gap-4 py-6">
        <CheckBox value="Knife">Faca</CheckBox>
        <CheckBox value="Rifle">Rifles</CheckBox>
        <CheckBox value="Sniper Rifle">Rifles de precisão</CheckBox>
        <CheckBox value="Pistol">Pistolas</CheckBox>
        <CheckBox value="SMG">Submetralhadoras</CheckBox>
        <CheckBox value="Machinegun">Metralhadoras</CheckBox>
        <CheckBox value="Shotgun">Escopetas</CheckBox>
        <CheckBox value="Gloves">Luvas</CheckBox>
        <CheckBox value="Sticker">Figurinhas</CheckBox>
        <CheckBox value="Agent">Agentes</CheckBox>
      </div>
    </div>
  )
}
