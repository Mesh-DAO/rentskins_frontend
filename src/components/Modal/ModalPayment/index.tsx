'use client'
import React, { useEffect, useState, SetStateAction } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalPaymentCheck } from './PaymentCheck'
import { ModalPaymentAdd } from './PaymentAdd'
import { ModalPaymentRetrieve } from './PaymentRetrieve'
import useComponentStore from '@/stores/components.store'
import { useSearchParams, useRouter } from 'next/navigation'
import URLQuery from '@/tools/urlquery.tool'
import Aos from 'aos'

export function ModalPayment() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  const [modalOpen, setModalOpen] = useState<string | undefined>('')
  const [modalType, setModalType] = useState<string | undefined>('')

  const searchParams = useSearchParams()
  const router = useRouter()

  const {
    paymentGeneralIndex,
    setPaymentGeneralIndex,
    setPaymentRetrieveIndex,
  } = useComponentStore()
  //
  useEffect(() => {
    setDomainQuery()
    handleModalOnClose()
  }, [location.search])

  const setDomainQuery = () => {
    setModalOpen(
      searchParams.get('modalopen') as SetStateAction<string | undefined>,
    )

    setModalType(
      searchParams.get('modaltype') as SetStateAction<string | undefined>,
    )
  }

  const removeDomainQuery = () => {
    router.push(URLQuery.removeQuery(['modalopen', 'modaltype']))
  }

  const handleModalOnClose = () => {
    setPaymentGeneralIndex(0)
    setPaymentRetrieveIndex(0)
  }

  return (
    <Dialog.Root
      modal
      open={modalOpen === 'true' && modalType === 'payment'}
      defaultOpen={false}
      onOpenChange={() => handleModalOnClose()}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-20 flex bg-black/70 transition-all"
          onClick={() => removeDomainQuery()}
        />
        {paymentGeneralIndex === 0 && <ModalPaymentCheck />}
        {paymentGeneralIndex === 1 && <ModalPaymentAdd />}
        {paymentGeneralIndex === 2 && <ModalPaymentRetrieve />}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
