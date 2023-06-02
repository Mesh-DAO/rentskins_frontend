import { SteamButton } from "@/components/SteamButton";
import { HeroInformation } from "@/components/HeroInformation";
import { Footer } from "@/components/Footer";

import ShieldIcon from '../../components/icons/icon-shield.svg';
import PhoneIcon from '../../components/icons/icon-phone.svg';
import MagnifyingGlassIcon from '../../components/icons/icon-magnifying-glass.svg';
import DevolutionIcon from '../../components/icons/icon-devolution.svg';
import Header from "@/components/Shared/Header";
import AllSkins from "@/components/AllSkins";

export default function Home(){
  return (
    <div className="bg-jet-black">
      <Header />
      <main className="flex flex-col">
      <div className="flex flex-col items-center justify-center bg-cover bg-hero-image bg-no-repeat bg-center h-screen">

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

        <div className="bg-mesh-dark-1 w-full h-40">
          <hr className="w-full -mt-0.5 h-2 bg-green-pattern"/>
          <div className="flex items-center h-full justify-center">
            <HeroInformation icon={ShieldIcon} title="Pagamento seguro">
              Realize seus pagamentos com tranquilidade!
            </HeroInformation>

            <HeroInformation icon={PhoneIcon} title="Suporte rápido">
              Tem alguma dúvida? Entre em contato conosco!
            </HeroInformation>

            <HeroInformation icon={MagnifyingGlassIcon} title="Ampla transparência">
              Priorizamos a transparência em todas as informações.
            </HeroInformation>

            <HeroInformation icon={DevolutionIcon} title="Política de devolução">
              Facilitamos a devolução ou troca, de acordo com nossos termos.
            </HeroInformation>
          </div>
        </div>
        <AllSkins />
      </main>
      <Footer />
    </div>
  )
}