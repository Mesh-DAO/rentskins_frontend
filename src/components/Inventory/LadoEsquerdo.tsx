import { InputRadio } from '../InputRadio'
import { Title } from '../Title'

export function LadoEsquerdo() {
  return (
    <div className="">
      <div className="space-">
        <Title color="white" className="text-3xl font-extrabold">
          Inventário
        </Title>
        <p className="mt-8 text-lg text-white">Filtros</p>
      </div>

      <div className="text-white">
        <input
          type="radio"
          className="h-5 w-5 rounded border-2 border-[#A7B0A0]"
        />

        <InputRadio className="h-5 w-5 gap-2 rounded border-2 checked:bg-blue-400">
          Aqui
        </InputRadio>
      </div>
    </div>
  )
}
