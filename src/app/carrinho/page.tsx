import AllSkinsCart from '@/components/Others/Skins/AllSkinsCart'
import Pages from '@/components/Pages'

export default function Carrinho() {
  return (
    <main className="flex w-full justify-center">
      <div className="my-6 flex w-3/4 items-start justify-center gap-6">
        <AllSkinsCart />
        <Pages.Summary.Cart />
      </div>
    </main>
  )
}
