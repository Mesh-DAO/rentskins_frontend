'use client'

import { SteamButton } from '@/components/SteamButton'
import { HeroInformation } from '@/components/HeroInformation'
import { LayoutPage } from '@/components/Shared'
import {
  IconShield,
  IconPhone,
  IconMagnifyingGlass,
  IconDevolution,
} from '@/components/Icons'
import AllSkins from '@/components/Skins/AllSkins'

export default function Home() {
  return (
    <LayoutPage>
      <main className="h-full">
        {/* Hero */}
        <div className="flex h-[1024px] flex-col items-center justify-center bg-mesh-image-hero bg-cover bg-center bg-no-repeat">
          {/* Hero - Content */}
          <div className="flex flex-col items-center space-y-8 text-center text-white">
            <p className="max-w-2xl text-[3.5rem] font-bold leading-none">
              <span>
                Descubra o mundo das skins{' '}
                <strong className="bg-mesh-gradient-green-pattern bg-clip-text text-transparent">
                  CS:GO
                </strong>
              </span>
            </p>
            <p className="max-w-3xl text-2xl">
              Personalize seu arsenal com as skins mais incríveis, encontrando
              as skins perfeitas para dominar o jogo!
            </p>
            <SteamButton />
          </div>
        </div>
        {/* Hero - Bottom */}
        <div className="h-40 w-full bg-mesh-color-neutral-800">
          {/* Hero - Green Line */}
          <hr className="-mt-0.5 h-2 w-full bg-mesh-gradient-green-pattern" />

          {/* Hero - Information */}
          <div className="flex h-full items-center justify-center">
            <HeroInformation icon={<IconShield />} title="Pagamento seguro">
              Realize seus pagamentos com tranquilidade!
            </HeroInformation>

            <HeroInformation icon={<IconPhone />} title="Suporte rápido">
              Tem alguma dúvida? Entre em contato conosco!
            </HeroInformation>

            <HeroInformation
              icon={<IconMagnifyingGlass />}
              title="Ampla transparência"
            >
              Priorizamos a transparência em todas as informações.
            </HeroInformation>

            <HeroInformation
              icon={<IconDevolution />}
              title="Política de devolução"
            >
              Facilitamos a devolução ou troca, de acordo com nossos termos.
            </HeroInformation>
          </div>
        </div>
        <div className="mb-28 mt-16">
          <AllSkins itemsPerPage={15} center />
        </div>
      </main>
    </LayoutPage>
  )
}
