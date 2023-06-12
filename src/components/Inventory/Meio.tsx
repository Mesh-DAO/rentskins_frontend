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
        <div className="mx-auto w-[60%] rounded-xl bg-mesh-color-others-eerie-black px-5 py-5">
          <Title bold={700} color="white" className="text-center font-bold">
            Para ter acesso às suas skins e realizar transações, é necessário
            vincular seu inventário à Steam
          </Title>
          <Button className="mt-4 h-10 w-full rounded-xl bg-mesh-color-primary-1400 font-semibold text-black">
            Conectar-se
          </Button>
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
