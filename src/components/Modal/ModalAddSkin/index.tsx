'use client'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconClose } from '@/components/Icons/IconClose'
import { CardSkinModal } from './CardSkinModal'
import { InfoSkinModal } from './InfoSkinModal'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'

interface IProps {
  activator: React.ReactNode
  isEdition?: boolean
  image?: string
}

export function ModalAddSkin({ activator, isEdition, image }: IProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{activator}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex bg-black/70" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2
        rounded-2xl bg-mesh-color-neutral-700 pb-10"
        >
          <div className="flex h-full w-full flex-col items-center justify-between pt-8">
            {/* TOP */}
            <div className="flex w-11/12 items-center justify-between">
              <Dialog.Title>
                {isEdition && (
                  <Title bold={600} size="2xl" color="white">
                    Edição
                  </Title>
                )}
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button className="border-transparent outline-none">
                  <IconClose />
                </Button>
                {/* CHANGE - MAKE IT FUNCTIONAL */}
              </Dialog.Close>
            </div>
            {/* MIDDLE */}
            <div className="flex h-full w-11/12 items-center justify-between">
              <CardSkinModal icon_url={image} />
              <InfoSkinModal />
            </div>
            <div />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
