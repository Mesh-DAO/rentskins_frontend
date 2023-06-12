import { Button } from '../Button'
import { IconArrow } from '../Icons'
import { Title } from '../Title'

export function InfoVendas() {
  return (
    <div className="mt-8 min-h-[484px] w-[700px] min-w-[742px] rounded-lg border-2 border-mesh-color-others-black-olive">
      <div className="p-4">
        <Title color="white" className="text-[28px] font-bold">
          Últimas vendas
        </Title>
        <div className="mt-4 space-y-6">
          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <Title color="cinza">30 Jun 2021 • 4:30H</Title>
            <span className="text-mesh-color-primary-1400">R$840</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <Title color="cinza">29 Jun 2021 • 23:21H</Title>
            <span className="text-mesh-color-primary-1400">R$832,21</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <Title color="cinza">29 Jun 2021 • 23:21H</Title>
            <span className="text-mesh-color-primary-1400">R$832,21</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <Title color="cinza">27 Jun 2021 • 9:59H</Title>
            <span className="text-mesh-color-primary-1400">R$792</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <Title color="cinza">27 Jun 2021 • 9:59H</Title>
            <span className="text-mesh-color-primary-1400">R$792</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <Title color="cinza">27 Jun 2021 • 9:59H</Title>
            <span className="text-mesh-color-primary-1400">R$792</span>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-end space-x-4">
          <Button className="flex border-none text-end">
            <IconArrow />
          </Button>
          <Button className="flex rotate-180 items-end border-none text-end">
            <IconArrow />
          </Button>
        </div>
      </div>
    </div>
  )
}
