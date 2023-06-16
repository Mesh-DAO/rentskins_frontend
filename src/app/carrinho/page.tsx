import { LayoutPage } from '@/components/Shared'
import AllSkinsCart from '@/components/Skins/AllSkinsCart'
import SummaryCart from '@/components/Summary/SummaryCart'

export default function Carrinho() {
  return (
    <LayoutPage>
      <main className="flex w-full justify-center">
        <div className="my-6 flex w-3/4 items-start justify-center gap-6">
          <AllSkinsCart />
          <SummaryCart />
        </div>
      </main>
    </LayoutPage>
  )
}
