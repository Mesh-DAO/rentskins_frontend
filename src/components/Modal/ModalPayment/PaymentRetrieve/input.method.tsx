'use client'
import React from 'react'
import { IconMastercard } from '@/components/Icons/payment/IconMastercard'
import { IconPix } from '@/components/Icons/payment/IconPix'
import { IconBoleto } from '@/components/Icons/payment/IconBoleto'
import usePaymentStore from '@/stores/payment.store'

export function ModalPaymentRetrieveInputMethods() {
  const { setPaymentRetrieve } = usePaymentStore()

  const handleMethodChange = (event: any) => {
    setPaymentRetrieve({ method: event.target.value })
  }

  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-8 pt-5">
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
          className="flex w-full select-none items-center justify-center rounded-md border-2 
          border-transparent bg-mesh-color-neutral-500 px-4 py-3
          font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          <div className="flex items-center justify-around gap-4 ">
            <IconMastercard />
            <p className="w-min text-xs">
              <span className="font-light">Via</span> <br />
              <span>Paybank</span>
            </p>
          </div>
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
          className="flex w-full select-none items-center justify-center rounded-md border-2 border-transparent 
          bg-mesh-color-neutral-500 px-4 py-3
          font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          <div className="flex items-center justify-center gap-4 ">
            <IconPix width={80} />
            <p className="w-min text-xs">
              <span className="font-light">Via</span> <br />
              <span>Paybank</span>
            </p>
          </div>
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
          className="flex w-full select-none items-center justify-center rounded-md border-2 border-transparent 
bg-mesh-color-neutral-500 px-4 py-3 
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          <div className="flex items-center justify-around gap-4 ">
            <IconBoleto />
            <p className="w-min text-xs">
              <span className="font-light">Via</span> <br />
              <span>Paybank</span>
            </p>
          </div>
        </label>
      </div>
    </div>
  )
}
