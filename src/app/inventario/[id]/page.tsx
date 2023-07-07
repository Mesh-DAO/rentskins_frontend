'use client'
import Pages from '@/components/Pages'

export default function Inventory() {
  return (
    <main className="w-full bg-mesh-color-others-black pt-[32px]">
      <div className="mx-auto grid w-10/12 grid-cols-10">
        <div className="col-span-2">
          <Pages.Inventory.Left />
        </div>
        <div className="col-span-6">
          <Pages.Inventory.Middle />
        </div>
        <div className="col-span-2">
          <Pages.Inventory.Right />
        </div>
      </div>
    </main>
  )
}
