import { PageInventoryLeft } from '@/components/Pages/PageInventory/PageInventoryLeft'
import { PageInventoryMiddle } from '@/components/Pages/PageInventory/PageInventoryMiddle'
import { PageInventoryRight } from '@/components/Pages/PageInventory/PageInventoryRight'

export default function Inventory() {
  return (
    <main className="w-full bg-mesh-color-others-black pt-[32px]">
      <div className="mx-auto grid w-10/12 grid-cols-10">
        <div className="col-span-2">
          <PageInventoryLeft />
        </div>
        <div className="col-span-6">
          <PageInventoryMiddle />
        </div>
        <div className="col-span-2">
          <PageInventoryRight />
        </div>
      </div>
    </main>
  )
}
