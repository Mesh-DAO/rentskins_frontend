import { SteamButton } from "@/components/SteamButton";
import Image from "next/image";
import ShieldIcon from '../../assets/icon-shield.svg';
import PhoneIcon from '../../assets/icon-phone.svg';
import MagnifyingGlassIcon from '../../assets/icon-magnifying-glass.svg';
import DevolutionIcon from '../../assets/icon-devolution.svg';


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
          <div className="">
            
            {/* Hero - Information / Pagamento Seguro */}
            <div className="flex gap-2">
              <div className="flex items-center justify-center w-12 h-12 bg-main-dark-light rounded-xl">
                <Image src={ShieldIcon} alt="Pagamento Seguro" className="w-6 h-6"/>
              </div>
              <span className="text-white space-y-1 w-1/2  bg-red-500">
                <strong className="text-sm">
                  Pagamento seguro
                </strong>
                <p className="text-xs">
                  Realize seus pagamentos com tranquilidade!
                </p>
              </span>
            </div>
            {/* Hero - Information / Suporte Rápido */}
            <div> OK </div>
            <div> OK </div>
            <div> OK </div>

          </div>
      </div>

    </main>
  )
}