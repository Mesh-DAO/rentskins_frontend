import { LadoDireito, LadoEsquerdo, Meio } from '@/components/Inventory'
import { LayoutPage } from '@/components/Shared/LayoutPage'

export default function Inventory() {
  return (
    <LayoutPage>
      <main className="w-full bg-mesh-color-others-black pt-[32px]">
        <div className="mx-auto grid w-10/12 grid-cols-8">
          <div className="col-span-2">
            <LadoEsquerdo />
          </div>
          <div className="col-span-4">
            <Meio />
          </div>
          <div className="col-span-2">
            <LadoDireito />
          </div>
        </div>
      </main>
    </LayoutPage>
  )
}
