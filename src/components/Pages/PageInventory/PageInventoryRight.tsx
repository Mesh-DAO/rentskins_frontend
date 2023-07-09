import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'

export function PageInventoryRight() {
  return (
    <div className="flex min-h-[400px] flex-col justify-between rounded-xl bg-mesh-color-others-eerie-black px-6 py-6">
      <div className="text-white">
        <CommonTitle color="white" className="text-[28px] font-bold">
          Resumo
        </CommonTitle>
        <div className="mt-5 flex justify-between ">
          <CommonTitle>Itens selecionados</CommonTitle>
          <span>0</span>
        </div>

        <div className="mt-5 flex justify-between ">
          <CommonTitle>Subtotal</CommonTitle>
          <span>R$0</span>
        </div>

        <div className="mt-5 flex justify-between ">
          <CommonTitle>Taxa</CommonTitle>
          <span>R$0</span>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-4 text-white">
        <div className="flex justify-between">
          <CommonTitle>Total</CommonTitle>
          <span>R$0</span>
        </div>
        <CommonButton className="h-[53px]">Vender</CommonButton>
      </div>
    </div>
  )
}
