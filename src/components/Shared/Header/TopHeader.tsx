import Image from "next/image";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Carrinho } from "@/components/Icons/Carrinho";
import { Steam } from "@/components/Icons/Steam";
import { Search } from "@/components/Icons/Search";
import logo from "../../../assets/logo.svg";

export function TopHeader() {
  return (
    <div className="mx-auto flex w-10/12 items-center justify-between">
      <div className="flex items-center gap-x-6 p-[18px]">
        <Image src={logo} alt="" width={45} height={48} />

        <div className=" flex items-center rounded-[12px] bg-dark-olive-green">
          <span className="ml-4">
            <Search />
          </span>
          <Input
            className="bg-dark-olive-green text-base text-[#A7B0A0]"
            placeHolder="Pesquise o item..."
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <Button className="h-[44px] w-[220px] rounded-[14px] border border-[#A7B0A0] bg-jet-black  p-2 text-[#A7B0A0]">
          <span className="mr-2">
            <Carrinho />
          </span>
          Carrinho de compra
        </Button>
        <Button className="h-[44px] w-[220px] rounded-[14px] bg-[#95BC1E]">
          <span className="mr-2">
            <Steam />
          </span>
          Entre com sua steam
        </Button>
      </div>
    </div>
  );
}
