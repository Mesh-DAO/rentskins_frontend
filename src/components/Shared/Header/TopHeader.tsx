import Image from 'next/image'
import { IconCarrinho, IconSteam, IconSearch } from '@/components/Icons'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import logo from '../../../assets/logo.svg'
import Link from 'next/link'

export function TopHeader() {
  return (
    <div className="mx-auto flex w-10/12 items-center justify-between">
      <div className="flex items-center gap-x-6 p-[18px]">
        <Link href="/">
          <Image src={logo} alt="" width={45} height={48} />
        </Link>

        <div className=" flex items-center rounded-[12px] bg-dark-olive-green">
          <span className="ml-4">
            <IconSearch />
          </span>
          <Input
            className="bg-dark-olive-green text-base text-[#A7B0A0]"
            placeHolder="Pesquise o item..."
          />
        </div>
      </div>
      {/* ----------BUTTON ------------ */}
      <div className="flex space-x-4">
        <Button className="h-[44px] w-[220px] rounded-[14px] border border-[#A7B0A0] bg-jet-black  p-2 text-[#A7B0A0]">
          <span className="mr-2">
            <IconCarrinho />
          </span>
          Carrinho de compra
        </Button>
        <Button className="h-[44px] w-[220px] rounded-[14px] bg-[#95BC1E] opacity-100">
          <span className="mr-2">
            <IconSteam />
          </span>
          Entre com sua steam
        </Button>
      </div>
      {/* ----------BUTTON FIM ------------ */}
    </div>
  )
}
