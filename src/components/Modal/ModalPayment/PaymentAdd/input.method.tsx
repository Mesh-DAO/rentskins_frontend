import React from 'react'
import { IconMastercard } from '@/components/Icons/payment/IconMastercard'
import { IconPix } from '@/components/Icons/payment/IconPix'
import { IconBoleto } from '@/components/Icons/payment/IconBoleto'
import usePaymentStore from '@/stores/payment.store'

export function PaymentAddMethodsInputs() {
  const { setPaymentAdd, paymentAdd } = usePaymentStore()

  const handleMethodChange = (event: any) => {
    setPaymentAdd({ method: event.target.value, value: paymentAdd.value })
  }
  //
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
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2 
          border-transparent bg-[#3C403C] px-4 py-3 text-lg
          font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
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
          defaultChecked
        />
        <label
          htmlFor="payment-index-2"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2 border-transparent 
          bg-[#3C403C] px-4 py-3 text-lg 
          font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
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
          value="ticket"
          onClick={(event) => handleMethodChange(event)}
          defaultChecked
        />
        <label
          htmlFor="payment-index-3"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2 border-transparent 
bg-[#3C403C] px-4 py-3 text-lg 
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          <IconBoleto />
        </label>
      </div>
    </div>
  )
}
