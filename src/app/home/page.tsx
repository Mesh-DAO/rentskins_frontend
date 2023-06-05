import { SteamButton } from '@/components/SteamButton'
import { HeroInformation } from '@/components/HeroInformation'
import ShieldIcon from '../../components/icons/icon-shield.svg'
import PhoneIcon from '../../components/icons/icon-phone.svg'
import MagnifyingGlassIcon from '../../components/icons/icon-magnifying-glass.svg'
import DevolutionIcon from '../../components/icons/icon-devolution.svg'
import { LayoutPage } from '@/components/Shared'

export default function Home() {
  return (
    <LayoutPage>
      <main className='h-[2000px]'>
        {/* Hero */}
        <div className='flex h-1/2 flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat'>
          {/* Hero - Content */}
          <div className='flex flex-col items-center space-y-8 text-center text-white'>
            <p className='max-w-2xl text-[3.5rem] font-bold leading-none'>
              <span>
                {' '}
                Descubra o mundo das skins{' '}
                <strong className='bg-green-pattern bg-clip-text text-transparent'>
                  CS:GO
                </strong>
              </span>
            </p>
            <p className='max-w-3xl text-2xl'>
              Personalize seu arsenal com as skins mais incríveis, encontrando
              as skins perfeitas para dominar o jogo!
            </p>
            <SteamButton />
          </div>
        </div>
        {/* Hero - Bottom */}
        <div className='h-40 w-full bg-mesh-dark-1'>
          {/* Hero - Green Line */}
          <hr className='-mt-0.5 h-2 w-full bg-green-pattern' />

          {/* Hero - Information */}
          <div className='flex h-full items-center justify-center'>
            {/* Hero - Information / Pagamento Seguro */}
            <HeroInformation icon={ShieldIcon} title='Pagamento seguro'>
              Realize seus pagamentos com tranquilidade!
            </HeroInformation>
            {/* Hero - Information / Suporte Rápido */}
            <HeroInformation icon={PhoneIcon} title='Suporte rápido'>
              Tem alguma dúvida? Entre em contato conosco!
            </HeroInformation>
            {/* Hero - Information / Ampla Transparência */}
            <HeroInformation
              icon={MagnifyingGlassIcon}
              title='Ampla transparência'
            >
              Priorizamos a transparência em todas as informações.
            </HeroInformation>
            {/* Hero - Information / Política de Devolução */}
            <HeroInformation
              icon={DevolutionIcon}
              title='Política de devolução'
            >
              Facilitamos a devolução ou troca, de acordo com nossos termos.
            </HeroInformation>
          </div>
        </div>
      </main>
    </LayoutPage>
  )
}
