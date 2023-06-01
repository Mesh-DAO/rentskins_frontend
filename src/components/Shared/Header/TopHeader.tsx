import Image from "next/image";
import logo from '../../../assets/logo.svg';
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Carrinho } from "@/components/Icons/Carrinho";
import { Steam } from "@/components/Icons/Steam";
import { Search } from "@/components/Icons/Search";

export function TopHeader() {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between">

      <div className="flex items-center gap-x-6 p-[18px]">
        <Image src={logo} alt="" width={45} height={48} />
        <div className=" flex items-center bg-dark-olive-green rounded-[12px]">
          <span className="ml-4"><Search /></span>
          <Input className="bg-dark-olive-green text-base text-[#A7B0A0]" placeHolder="Pesquise o item..." />
        </div>
      </div>

      <div className="space-x-4 flex">
        <Button className="border border-[#A7B0A0] text-[#A7B0A0] bg-jet-black"><span className="mr-2"><Carrinho /></span>Carrinho de compra</Button>
        <Button className="bg-dark-lime-green"><span className="mr-2"><Steam /></span>Entre com sua steam</Button>
      </div>

    </div>
  )
}