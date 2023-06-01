import Image from "next/image";
// import HeroImage from "../../../public/hero.png";

export default function Home(){
  return (
    <main className="h-[2000px]">
      {/* Hero */}
      {/* <div className="flex flex-col items-center justify-center bg-zinc-500 h-1/2"> */}
      <div className="flex flex-col items-center justify-center bg-hero-image bg-no-repeat bg-center  h-1/2">
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

          {/* <Image src={HeroImage} alt="Hero"/> */}
        </div>
      </div>
    </main>
  )
}