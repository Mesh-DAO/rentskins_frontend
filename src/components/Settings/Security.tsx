import { Button } from "../Button";
import { Title } from "../Title";
import Image from "next/image";
import IconAlert from '../../components/Icons/icon-alert.svg';

export function SettingsSecurity() {
  return(
        <div className="w-2/3 flex flex-col gap-8">
        {/* Top */}
        <div className="bg-mesh-dark-1 px-4 py-6 rounded-2xl">
          <Title bold={700} size={"2xl"} color="white">Segurança</Title>

          <div className="flex flex-col gap-2 mt-8">
            <div className="flex items-center justify-between ">
              <div className="flex items-center justify-start gap-3 w-3/4">
                <Title size={"lg"} color="white">Steam Guard</Title>

                <div className="flex gap-2 bg-red-500/10 text-[#E84E6A] px-2 py-1 rounded-md">
                  <Image src={IconAlert} alt="Alert" />
                  Desativado
                </div>

              </div>
              <Button className="bg-transparent w-32 text-alt-steam-button hover:text-alt-steam-button/50 transition-colors"> Atualizar </Button>
            </div>

            {/* CHANGE COLOR! */}
            <span className="text-[#90988B] text-base leading-5">
              O Steam Guard é um nível extra de segurança para a sua conta Steam.
              Ele evita que pessoal mal intencionadas roubem seus itens e é um requisito para que você
              possa trocar no SkinsMonkey.
            </span>
          </div>
        </div>
      </div>
  )
}