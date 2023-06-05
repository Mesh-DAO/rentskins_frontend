"use client"
import { useState } from "react"
import InputRadio from "../InputRadio"

interface Props {
  thereIsRented?: boolean
}

export default function ChoiceItems({ thereIsRented = false }: Props) {
  return (
    <div className="flex gap-16 self-start mt-16">
      <InputRadio checked={true}>Items à venda</InputRadio>
      { thereIsRented ? <InputRadio>Alugados</InputRadio> : null }
    </div>
  )
}