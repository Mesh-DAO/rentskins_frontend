import { Button } from '../Button'
import { Title } from '../Title'

export function LadoDireito() {
  return (
    <div className="flex min-h-[400px] flex-col justify-between rounded-xl bg-[#222723] px-6 py-6">
      <div className="text-white">
        <Title color="white" className="text-[28px] font-bold">
          Resumo
        </Title>
        <div className="mt-5 flex justify-between ">
          <Title>Itens selecionados</Title>
          <span>0</span>
        </div>

        <div className="mt-5 flex justify-between ">
          <Title>Subtotal</Title>
          <span>R$0</span>
        </div>

        <div className="mt-5 flex justify-between ">
          <Title>Taxa</Title>
          <span>R$0</span>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-4 text-white">
        <div className="flex justify-between">
          <Title>Total</Title>
          <span>R$0</span>
        </div>
        <Button className="h-[53px]">Vender</Button>
      </div>
    </div>
  )
}
