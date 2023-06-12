'use client'

import { Button } from '../Button'
import { ModalConnectInventario } from '../Modal/ModalConectInventory'
import { ModalAddSkin } from '../Modal/ModalAddSkin'
import { Title } from '../Title'
import { CardSkinInventory } from './CardSkinInventory'

export function Meio() {
  const num = 1

  return (
    <div className="min-h-[1000px]">
      {Number(num) === 2 ? (
        <div className="mx-auto w-[60%] rounded-xl bg-[#222723] px-5 py-5">
          <Title bold={700} color="white" className="text-center font-bold">
            Para ter acesso às suas skins e realizar transações, é necessário
            vincular seu inventário à Steam
          </Title>
          <ModalConnectInventario
            activator={
              <Button className="mt-4 h-10 w-full rounded-xl bg-[#95BC1E] font-semibold text-black">
                Conectar-se
              </Button>
            }
          />
        </div>
      ) : (
        <div className="flex justify-center space-x-6">
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
