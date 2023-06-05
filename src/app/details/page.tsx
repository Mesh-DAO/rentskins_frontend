import { Card, InfoPerfil, InfoVendas, InfoSkin } from '@/components/Details'
import { LayoutPage } from '@/components/Shared/LaoutPage'

export default function Details() {
  return (
    <LayoutPage>
      <main className='w-full bg-jet-black'>
        <div className='mx-auto flex w-10/12 justify-center py-10'>
          <div>
            <Card />
            <InfoVendas />
          </div>
          <div className='ml-4'>
            <InfoSkin />
            <InfoPerfil />
          </div>
        </div>
      </main>
    </LayoutPage>
  )
}
