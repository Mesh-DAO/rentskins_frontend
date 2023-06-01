import { SteamButton } from "@/components/SteamButton";
import Image from "next/image";
import ShieldIcon from '../../assets/icon-shield.svg';
import PhoneIcon from '../../assets/icon-phone.svg';
import MagnifyingGlassIcon from '../../assets/icon-magnifying-glass.svg';
import DevolutionIcon from '../../assets/icon-devolution.svg';
import { HeroInformation } from "@/components/HeroInformation";

export default function Home(){
  return (
    <main className="h-[2000px]">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center bg-cover bg-hero-image bg-no-repeat bg-center h-1/2">

        {/* Hero - Content */}
        <div className="space-y-8 text-center flex flex-col items-center text-white">
          <p className="max-w-2xl font-bold text-[3.5rem] leading-none">
            <span> Descubra o mundo das skins{' '}
              <strong className="bg-green-pattern text-transparent bg-clip-text">
                CS:GO
              </strong>
            </span>
          </p>
          <p className="max-w-3xl text-2xl">
            Personalize seu arsenal com as skins mais incríveis, encontrando as
            skins perfeitas para dominar o jogo!
          </p>
          <SteamButton />
        </div>
        </div>
        {/* Hero - Bottom */}
        <div className="bg-main-dark-lighter w-full h-40">
          {/* Hero - Green Line */}
          <hr className="w-full -mt-0.5 h-2 bg-green-pattern"/>

          {/* Hero - Information */}
          <div className="flex items-center h-full justify-center">

            {/* Hero - Information / Pagamento Seguro */}
            <HeroInformation icon={ShieldIcon} title="Pagamento seguro"/>
            <div className="flex items-end gap-2 w-1/5">
              <div className="flex items-center justify-center w-12 h-12 bg-main-dark-light rounded-xl">
                <Image src={ShieldIcon} alt="Pagamento Seguro" className="w-6 h-6"/>
              </div>
              <span className="text-white w-1/2">
                <strong className="text-sm">
                  Pagamento seguro
                </strong>
                <p className="text-[10px]">
                  Realize seus pagamentos com tranquilidade!
                </p>
              </span>
            </div>
            {/* Hero - Information / Suporte Rápido */}
            <div className="flex items-end gap-2 w-1/5">
              <div className="flex items-center justify-center w-12 h-12 bg-main-dark-light rounded-xl">
                <Image src={PhoneIcon} alt="Pagamento Seguro" className="w-6 h-6"/>
              </div>
              <span className="text-white w-1/2">
                <strong className="text-sm">
                  Suporte rápido
                </strong>
                <p className="text-[10px]">
                  Tem alguma dúvida? Entre em contato conosco!
                </p>
              </span>
            </div>
            {/* Hero - Information / Ampla Transparência */}
            <div className="flex items-end gap-2 w-1/5">
              <div className="flex items-center justify-center w-12 h-12 bg-main-dark-light rounded-xl">
                <Image src={MagnifyingGlassIcon} alt="Pagamento Seguro" className="w-6 h-6"/>
              </div>
              <span className="text-white w-1/2">
                <strong className="text-sm">
                  Ampla transparência
                </strong>
                <p className="text-[10px]">
                  Priorizamos a transparência em todas as informações.
                </p>
              </span>
            </div>
            {/* Hero - Information / Política de Devolução */}
            <div className="flex items-end gap-2 w-1/5">
              <div className="flex items-center justify-center w-12 h-12 bg-main-dark-light rounded-xl">
                <Image src={DevolutionIcon} alt="Pagamento Seguro" className="w-6 h-6"/>
              </div>
              <span className="text-white w-1/2">
                <strong className="text-sm">
                  Política de devolução
                </strong>
                <p className="text-[10px]">
                  Facilitamos a devolução ou troca, de acordo com nossos termos.
                </p>
              </span>
            </div>

          </div>
      </div>

    </main>
  )
}