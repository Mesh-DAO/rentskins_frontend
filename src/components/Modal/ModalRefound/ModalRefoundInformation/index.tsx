'use client'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import SkinCardModal from './SkinCardModal'
import RefoundInfos from './RefoundInfos'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import { IconClose } from '@/components/Icons'

interface IProps {
  name: string
  nameColor: string
  iconUrl: string
}

export function ModalRefoundInformation({ name, nameColor, iconUrl }: IProps) {
  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 w-[50%] -translate-x-1/2 -translate-y-1/2
        rounded-2xl bg-[#222723]"
    >
      <div className="flex h-full w-full flex-col items-center justify-between">
        <SkinCardModal name={name} iconUrl={iconUrl} nameColor={nameColor} />
        <div className="w-full rounded-2xl bg-[#272E29] px-8 py-6">
          <div className="mb-5 flex w-full justify-between">
            <Dialog.Title asChild>
              <Title size="3xl" color="white" bold={800}>
                Devolução
              </Title>
            </Dialog.Title>
            <Dialog.Close>
              <Button className="border-none">
                <IconClose />
              </Button>
            </Dialog.Close>
          </div>
          <RefoundInfos />
        </div>
      </div>
    </Dialog.Content>
  )
}
