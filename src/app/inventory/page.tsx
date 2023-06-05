import { LadoEsquerdo } from '@/components/Inventory'
import { LayoutPage } from '@/components/Shared/LayoutPage'

export default function Inventory() {
  return (
    <LayoutPage>
      <main className="w-full bg-jet-black pt-[32px]">
        <div className="mx-auto w-10/12">
          <LadoEsquerdo />
        </div>
      </main>
    </LayoutPage>
  )
}
