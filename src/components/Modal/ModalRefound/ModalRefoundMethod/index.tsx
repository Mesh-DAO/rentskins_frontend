import { Button } from '@/components/Button'
import { IconClose } from '@/components/Icons'
import { Title } from '@/components/Title'
import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import ModalMethodInfos from './ModalMethodInfos'

export default function ModalRefoundMethod() {
  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2
        rounded-2xl bg-[#222723] px-8 py-6"
    >
      <div className="mb-5 flex w-full justify-between">
        <Dialog.Title>
          <Title bold={800} size="3xl" color="white">
            Devolução
          </Title>
        </Dialog.Title>
        <Dialog.Close>
          <Button className="border-none">
            <IconClose />
          </Button>
        </Dialog.Close>
      </div>
      <div>
        <ModalMethodInfos />
      </div>
    </Dialog.Content>
  )
}
