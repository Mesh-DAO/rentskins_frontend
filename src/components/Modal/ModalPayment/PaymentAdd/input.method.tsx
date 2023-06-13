import React from 'react'
import { IconMastercard } from '@/components/Icons/payment/IconMastercard'
import { IconPix } from '@/components/Icons/payment/IconPix'
import { IconBoleto } from '@/components/Icons/payment/IconBoleto'
import usePaymentStore from '@/stores/payment.store'

export function ModalPaymentAddMethodsInputs() {
  const { setPaymentAdd, paymentAdd } = usePaymentStore()

  const handleMethodChange = (event: any) => {
    setPaymentAdd({ method: event.target.value, value: paymentAdd.value })
  }

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 pt-5">
      <div className="flex h-24 w-full">
        <input
          type="radio"
          id="payment-index-1"
          name="payment-index"
          className="peer appearance-none"
          value="mastercard"
          onClick={(event) => handleMethodChange(event)}
          defaultChecked
        />
        <label
          htmlFor="payment-index-1"
          className="flex w-full cursor-pointer select-none items-center justify-center gap-4 rounded-md 
          border-2 border-transparent bg-mesh-color-neutral-500 px-4 py-3 text-lg font-semibold
          text-mesh-color-neutral-200 transition-all duration-500 hover:bg-mesh-color-neutral-500/50
          peer-checked:border-mesh-color-primary-600 peer-checked:bg-mesh-color-neutral-400 peer-checked:text-white"
        >
          <IconMastercard />
        </label>
      </div>

      <div className="flex h-24 w-full">
        <input
          type="radio"
          id="payment-index-2"
          name="payment-index"
          className="peer appearance-none"
          value="pix"
          onClick={(event) => handleMethodChange(event)}
        />
        <label
          htmlFor="payment-index-2"
          className="flex w-full cursor-pointer select-none items-center justify-center gap-4 rounded-md border-2 
          border-transparent bg-mesh-color-neutral-500 px-4 py-3 text-lg font-semibold
          text-mesh-color-neutral-200 transition-all duration-500 hover:bg-mesh-color-neutral-500/50 peer-checked:border-mesh-color-primary-600 peer-checked:bg-mesh-color-neutral-400 peer-checked:text-white"
        >
          <IconPix />
        </label>
      </div>

      <div className="flex h-24 w-full">
        <input
          type="radio"
          id="payment-index-3"
          name="payment-index"
          className="peer appearance-none"
          value="boleto"
          onClick={(event) => handleMethodChange(event)}
        />
        <label
          htmlFor="payment-index-3"
          className="flex w-full cursor-pointer select-none items-center justify-center gap-4 rounded-md border-2 
border-transparent bg-mesh-color-neutral-500 px-4 py-3 text-lg font-semibold
text-mesh-color-neutral-200 transition-all duration-500 hover:bg-mesh-color-neutral-500/50 peer-checked:border-mesh-color-primary-600 peer-checked:bg-mesh-color-neutral-400 peer-checked:text-white"
        >
          <IconBoleto />
        </label>
      </div>
    </div>
  )
}
