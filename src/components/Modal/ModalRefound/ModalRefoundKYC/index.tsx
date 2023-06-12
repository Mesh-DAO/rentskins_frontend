import { Button } from '@/components/Button'
import CircleLoading from '@/components/CircleLoading'
import { IconClose } from '@/components/Icons'
import * as Dialog from '@radix-ui/react-dialog'
import classNames from 'classnames'
import React, { useState } from 'react'

export default function ModalRefoundMethod() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Dialog.Content
      className={classNames(
        'fixed left-1/2 top-1/2 h-96 w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#222723] px-8 py-6',
        { 'flex items-center justify-center': isLoading === true },
      )}
    >
      <CircleLoading enabled={isLoading} label="Processando...">
        <div className="mb-5 flex h-full w-full flex-col items-end justify-between">
          <Dialog.Close>
            <Button className="self-end border-none">
              <IconClose />
            </Button>
          </Dialog.Close>

          <Button
            onClick={() => {
              setIsLoading(true)
            }}
            color="green"
            className="h-11 w-80 rounded text-lg font-bold text-black"
          >
            Prosseguir
          </Button>
        </div>
      </CircleLoading>
    </Dialog.Content>
  )
}
