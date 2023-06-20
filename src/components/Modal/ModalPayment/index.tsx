'use client'
import React, { useEffect, useState, SetStateAction } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalPaymentCheck } from './PaymentCheck'
import { ModalPaymentAdd } from './PaymentAdd'
import useComponentStore from '@/stores/components.store'
import { ModalPaymentRetrieve } from './PaymentRetrieve'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { ParsedUrlQuery } from 'querystring'

interface IProps extends ParsedUrlQuery {
  modalOpen: string
}

export function ModalPayment({ params }: IProps) {
  const [modalOpen, setModalOpen] = useState<string | undefined>('')
  const [modalType, setModalType] = useState<string | undefined>('')

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const {
    paymentGeneralIndex,
    setPaymentGeneralIndex,
    setPaymentRetrieveIndex,
  } = useComponentStore()

  useEffect(() => {
    setDomainQuery()
    console.log(params)
  }, [])

  const setDomainQuery = () => {
    setModalOpen(
      searchParams.get('modalopen') as SetStateAction<string | undefined>,
    )
    setModalType(
      searchParams.get('modaltype') as SetStateAction<string | undefined>,
    )
  }

  const removeDomainQuery = () => {
    router.push('')
    router.replace('', {})
  }

  const handleModalOnClose = () => {
    setPaymentGeneralIndex(0)
    setPaymentRetrieveIndex(0)
  }

  return (
    <Dialog.Root
      modal
      open={modalOpen === 'true'}
      onOpenChange={() => handleModalOnClose()}
    >
      <Dialog.Trigger asChild></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 flex bg-black/70 transition-all"
          onClick={() => removeDomainQuery()}
        />
        {paymentGeneralIndex === 0 && <ModalPaymentCheck />}
        {paymentGeneralIndex === 1 && <ModalPaymentAdd />}
        {paymentGeneralIndex === 2 && <ModalPaymentRetrieve />}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
