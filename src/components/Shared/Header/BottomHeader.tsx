import { IconSetaType } from '@/components/Icons'
import { Title } from '@/components/Title'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

type PropsContainer = {
  title: string
  children?: React.ReactNode
  iconSeta?: React.ReactNode
  isList: boolean
  className?: string
  top?: '10' | '14'
}

type PropsItems = {
  title: string
  linkRef?: string
}

export function BottomHeader() {
  return (
    <div className="mx-auto flex w-10/12 justify-between gap-10 p-4">
      <ContainerItem title="Faca" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink title="Baioneta" />
        <ItemLink title="Faca Bowie" />
        <ItemLink title="Canivete Borboleta" />
        <ItemLink title="Faca Clássica" />
        <ItemLink title="Faca Falchion" />
        <ItemLink title="Faca Virar" />
        <ItemLink title="Faca Gut" />
        <ItemLink title="Faca de Caçador" />
        <ItemLink title="Baioneta M9" />
        <ItemLink title="Faca Navaja" />
        <ItemLink title="Faca Nômade" />
        <ItemLink title="Faca Paracord" />
        <ItemLink title="Adagas das Sombras" />
        <ItemLink title="Faca de Esqueleto" />
        <ItemLink title="Faca Estilete" />
        <ItemLink title="Faca de Sobrevivência" />
        <ItemLink title="Faca de Guerra" />
        <ItemLink title="Faca de Ursus" />
      </ContainerItem>

      <ContainerItem title="Rifles" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink title="FAMAS" />
        <ItemLink title="Galil AR" />
        <ItemLink title="M4A4" />
        <ItemLink title="M4A1-S" />
        <ItemLink title="AK-47" />
        <ItemLink title="AUG" />
        <ItemLink title="SG 553" />
        <ItemLink title="SSG 08" />
        <ItemLink title="AWP" />
        <ItemLink title="SCAR-20" />
        <ItemLink title="G3SG1" />
      </ContainerItem>

      <ContainerItem title="Luvas" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink title="Envoltórios de mão" />
        <ItemLink title="Luvas de moto" />
        <ItemLink title="Luvas Especializadas" />
        <ItemLink title="Luvas Esportivas" />
        <ItemLink title="Luvas de cão de caça" />
        <ItemLink title="Luvas de Hidra" />
        <ItemLink title="Luvas de motorista" />
        <ItemLink title="Luvas de presas quebradas" />
      </ContainerItem>

      <ContainerItem title="Pistolas" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink title="P2000" linkRef="P2000" />
        <ItemLink title="Glock 18" linkRef="Glock 18" />
        <ItemLink title="P250" linkRef="P250" />
        <ItemLink title="Five-SeveN" linkRef="Five-SeveN" />
        <ItemLink title="Tec-9" linkRef="Tec-9" />
        <ItemLink title="CZ75-Auto" linkRef="CZ75-Auto" />
        <ItemLink title="Dual Berettas" linkRef="Dual Berettas" />
        <ItemLink title="Desert Eagle" linkRef="Desert Eagle" />
        <ItemLink title="R8 Revolver" linkRef="R8 Revolver" />
        <ItemLink title="Dual Berettas" linkRef="Dual Berettas" />
      </ContainerItem>

      <ContainerItem
        title="Submetralhadoras"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink title="MP9" />
        <ItemLink title="MAC-10" />
        <ItemLink title="PP-Bizon" />
        <ItemLink title="MP7" />
        <ItemLink title="UMP-45" />
        <ItemLink title="P90" />
        <ItemLink title="MP5-SD" />
      </ContainerItem>

      <ContainerItem
        title="Escopetas"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink title="Nova" />
        <ItemLink title="XM1014" />
        <ItemLink title="MAG-7" />
        <ItemLink title="Sawed-Off" />
      </ContainerItem>

      <ContainerItem
        title="Metralhadoras"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink title="M249" />
        <ItemLink title="Negev" />
      </ContainerItem>

      <ContainerItem title="Figurinhas" isList={false}>
        <ItemLink title="Rifle 1" />
      </ContainerItem>

      <ContainerItem title="Agentes" isList={false}></ContainerItem>
    </div>
  )
}

export const ContainerItem = ({
  children,
  title,
  iconSeta = <IconSetaType />,
  isList,
  className,
}: PropsContainer) => {
  return (
    <div className={classNames('group relative z-20 ', className)}>
      {isList ? (
        <div className="flex items-center">
          <Title color="white" className="cursor-pointer">
            {title}
          </Title>
          <span className="ml-2 transition duration-300 ease-in-out  group-hover:rotate-180">
            {iconSeta}
          </span>
        </div>
      ) : (
        <Title color="white">
          <a href="">{title}</a>
        </Title>
      )}

      {isList && (
        <div
          className={`invisible absolute top-10 max-h-[300px] w-fit overflow-y-auto overflow-x-hidden rounded-md bg-[#222723] py-1 text-white delay-75 group-hover:visible`}
        >
          <ul className=" mr-2 flex flex-col">{children}</ul>
        </div>
      )}
    </div>
  )
}

export const ItemLink = ({ title, linkRef }: PropsItems) => {
  return (
    <li className="mx-1 flex h-12 items-center whitespace-nowrap rounded p-2 font-semibold hover:bg-[#3C403C]">
      <Link href={`/categorias/${linkRef}`} rel="noopener noreferrer">
        {title}
      </Link>
    </li>
  )
}
