import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { IconArrow } from '@/components/Icons'

export function PageDetailsVendas() {
  return (
    <div className="mt-8 min-h-[484px] rounded-lg border-2 border-mesh-color-others-black-olive">
      <div className="p-4">
        <CommonTitle color="white" className="text-[28px] font-bold">
          Últimas vendas
        </CommonTitle>
        <div className="mt-4 space-y-6">
          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <CommonTitle className="text-mesh-color-neutral-0">
              30 Jun 2021 • 4:30H
            </CommonTitle>
            <span className="text-mesh-color-primary-1400">R$840</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <CommonTitle className="text-mesh-color-neutral-0">
              29 Jun 2021 • 23:21H
            </CommonTitle>
            <span className="text-mesh-color-primary-1400">R$832,21</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <CommonTitle className="text-mesh-color-neutral-0">
              29 Jun 2021 • 23:21H
            </CommonTitle>
            <span className="text-mesh-color-primary-1400">R$832,21</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <CommonTitle className="text-mesh-color-neutral-0">
              27 Jun 2021 • 9:59H
            </CommonTitle>
            <span className="text-mesh-color-primary-1400">R$792</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <CommonTitle className="text-mesh-color-neutral-0">
              27 Jun 2021 • 9:59H
            </CommonTitle>
            <span className="text-mesh-color-primary-1400">R$792</span>
          </div>

          <div className="flex justify-between border-b border-mesh-color-others-black-olive pb-2">
            <CommonTitle className="text-mesh-color-neutral-0">
              27 Jun 2021 • 9:59H
            </CommonTitle>
            <span className="text-mesh-color-primary-1400">R$792</span>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-end space-x-4">
          <CommonButton className="flex border-none text-end">
            <IconArrow />
          </CommonButton>
          <CommonButton className="flex rotate-180 items-end border-none text-end">
            <IconArrow />
          </CommonButton>
        </div>
      </div>
    </div>
  )
}
