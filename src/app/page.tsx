"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

interface skins {
  market_name: string;
  icon_url_large: string;
}

export default function Home() {
  const [itens, setItens] = useState<skins[]>()

  useEffect(() => {
    fetch('/api/get_inventory').then((res) => res.json()).then((data) => setItens(data))
  }, [])
  
  console.log(itens)
  return (
    <main className="grid grid-cols-5">
      { itens !== undefined ? itens.map(({ market_name, icon_url_large }: skins) => {
        return <div key={market_name} className="w-[300px] h-[300px] border flex flex-col justify-center items-center">
          <Image src={`https://steamcommunity-a.akamaihd.net/economy/image/${icon_url_large}`} alt="" width={200} height={200} />
          <h1>{market_name}</h1>
        </div>
      }) : <h2>Ola</h2>}
    </main>
  )
}