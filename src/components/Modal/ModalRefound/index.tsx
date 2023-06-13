'use client'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import useComponentStore from '@/stores/components.store'
import { ModalRefoundInformation } from './ModalRefoundInformation'
import ModalRefoundMethod from './ModalRefoundMethod'
import ModalRefoundKYC from './ModalRefoundKYC'

interface IProps {
  activator: React.ReactNode
  name: string
  nameColor: string
  iconUrl: string
}

export function ModalRefound({ activator, name, nameColor, iconUrl }: IProps) {
  const { setRefoundGeneralIndex, refoundGeneralIndex } = useComponentStore()

  console.log(refoundGeneralIndex)

  return (
    <Dialog.Root modal onOpenChange={() => setRefoundGeneralIndex(0)}>
      <Dialog.Trigger asChild>{activator}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex bg-black/70 transition-all" />
        {refoundGeneralIndex === 0 && (
          <ModalRefoundInformation
            iconUrl={iconUrl}
            name={name}
            nameColor={nameColor}
          />
        )}
        {refoundGeneralIndex === 1 && <ModalRefoundMethod />}
        {refoundGeneralIndex === 2 && <ModalRefoundKYC />}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
