import { IconSetaType } from '@/components/Icons'
import { ItemLink } from '@/components/ItemLink'
import { Title } from '@/components/Title'
import classNames from 'classnames'
import React from 'react'

type PropsContainer = {
  title: string
  children?: React.ReactNode
  iconSeta?: React.ReactNode
  isList: boolean
  className?: string
  top?: '10' | '14'
}

export function BottomHeader() {
  return (
    <div className="z-0 mx-auto flex w-10/12 select-none justify-between gap-10 p-4">
      <ContainerItem title="Faca" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink
          items={[
            'Baioneta',
            'Faca Bowie',
            'Canivete Borboleta',
            'Faca Clássica',
            'Faca Falchion',
            'Faca Virar',
            'Faca Gut',
            'Faca de Caçador',
            'Baioneta M9',
            'Faca Navaja',
            'Faca Nômade',
            'Faca Paracord',
            'Adagas das Sombras',
            'Faca de Esqueleto',
            'Faca Estilete',
            'Faca de Sobrevivência',
            'Faca de Guerra',
            'Faca de Ursus',
          ]}
        />
      </ContainerItem>

      <ContainerItem title="Rifles" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink
          items={[
            'FAMAS',
            'Galil AR',
            'M4A4',
            'M4A1-S',
            'AK-47',
            'AUG',
            'SG 553',
            'SSG 08',
            'AWP',
            'SCAR-20',
            'G3SG1',
          ]}
        />
      </ContainerItem>

      <ContainerItem title="Luvas" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink
          items={[
            'Envoltórios de Mão',
            'Luvas de Moto',
            'Luvas Especializadas',
            'Luvas Esportivas',
            'Luvas de Cão de Caça',
            'Luvas de Hidra',
            'Luvas de Motorista',
            'Luvas de Presas Quebradas',
          ]}
        />
      </ContainerItem>

      <ContainerItem title="Pistolas" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink
          items={[
            'USP-S',
            'P2000',
            'Glock-18',
            'P250',
            'Five-SeveN',
            'Tec-9',
            'CZ75-Auto',
            'Dual Berettas',
            'Desert Eagle',
            'R8 Revolver',
            'Dual Berettas',
          ]}
        />
      </ContainerItem>

      <ContainerItem
        title="Submetralhadoras"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink
          items={[
            'MP9',
            'MAC-10',
            'PP-Bizon',
            'MP7',
            'UMP-45',
            'P90',
            'MP5-SD',
          ]}
        />
      </ContainerItem>

      <ContainerItem
        title="Escopetas"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink items={['Nova', 'XM1014', 'MAG-7', 'Sawed-Off']} />
      </ContainerItem>

      <ContainerItem
        title="Metralhadoras"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink items={['M249', 'Negev']} />
      </ContainerItem>

      <ContainerItem title="Figurinhas" isList={false} />

      <ContainerItem title="Agentes" isList={false} />
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
          <Title color="white">{title}</Title>
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
