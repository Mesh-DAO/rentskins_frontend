'use client'

import { Button } from '../Button'
import { ModalAddSkin } from '../Modal/ModalAddSkin'
import { Title } from '../Title'
import { CardSkinInventory } from './CardSkinInventory'

export function Meio() {
  const num = 2

  return (
    <div className="min-h-[1000px]">
      {Number(num) === 1 ? (
        <div className="mx-auto w-[60%] rounded-xl bg-[#222723] px-5 py-5">
          <Title color="white" className="text-center font-bold">
            Para ter acesso às suas skins e realizar transações, é necessário
            vincular seu inventário à Steam
          </Title>
          <Button className="mt-4 h-10 w-full rounded-xl bg-[#95BC1E] font-semibold text-black">
            Conectar-se
          </Button>
        </div>
      ) : (
        <div className="flex">
          <ModalAddSkin
            activator={CardSkinInventory({ nameColor: 'DFDFDF' })}
          />
          <ModalAddSkin
            activator={CardSkinInventory({ nameColor: 'DFDFDF' })}
          />
        </div>
      )}
    </div>
  )
}
