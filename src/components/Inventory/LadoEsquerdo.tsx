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
          name="skin"
          radio="filter"
          style="filter"
          value="mais recente"
        >
          <Title color="white" className="ml-8">
            Mais recente
          </Title>
        </InputRadio>
        <InputRadio
          style="filter"
          name="skin"
          radio="filter"
          value="menor preco"
        >
          <Title color="white" className="ml-8">
            Menor preço
          </Title>
        </InputRadio>
        <InputRadio
          style="filter"
          name="skin"
          radio="filter"
          value="maior preco"
        >
          <Title color="white" className="ml-8">
            Maior preço
          </Title>
        </InputRadio>
        <InputRadio
          style="filter"
          name="skin"
          radio="filter"
          value="mehlor float"
        >
          <Title color="white" className="ml-8">
            Melhor float
          </Title>
        </InputRadio>
      </div>

      <div className="flex flex-col gap-4 py-6">
        <InputRadio style="filter" name="type" radio="filter" value="faca">
          <Title color="white" className="ml-8">
            Faca
          </Title>
        </InputRadio>

        <InputRadio style="filter" name="type" radio="filter" value="rifles">
          <Title color="white" className="ml-8">
            Rifles
          </Title>
        </InputRadio>
        <InputRadio style="filter" name="type" radio="filter" value="faca">
          <Title color="white" className="ml-8">
            Pistolas
          </Title>
        </InputRadio>

        <InputRadio
          style="filter"
          name="type"
          radio="filter"
          value="submetralhadoras"
        >
          <Title color="white" className="ml-8">
            Submetralhadoras
          </Title>
        </InputRadio>

        <InputRadio
          style="filter"
          name="type"
          radio="filter"
          value="metralhadoras"
        >
          <Title color="white" className="ml-8">
            Metralhadoras
          </Title>
        </InputRadio>

        <InputRadio style="filter" name="type" radio="filter" value="escopetas">
          <Title color="white" className="ml-8">
            Escopetas
          </Title>
        </InputRadio>

        <InputRadio
          style="filter"
          name="type"
          radio="filter"
          value="figurinhas"
        >
          <Title color="white" className="ml-8">
            Figurinhas
          </Title>
        </InputRadio>

        <InputRadio style="filter" name="type" radio="filter" value="agentes">
          <Title color="white" className="ml-8">
            Agentes
          </Title>
        </InputRadio>
      </div>
    </div>
  )
}
