import { IconSetaType } from '@/components/Icons'
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

type PropsItems = {
  title: string
  linkRef?: string
}

export function BottomHeader() {
  return (
    <div className="mx-auto flex w-10/12 justify-between gap-10 p-4">
      <ContainerItem title="Faca" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink title="Faca 1" />
        <ItemLink title="Faca 1" />
        <ItemLink title="Faca 1" />
        <ItemLink title="Faca 1" />
        <ItemLink title="Faca 1" />
        <ItemLink title="Faca 1" />
        <ItemLink title="Faca 1" />
        <ItemLink title="Faca 1" />
        <ItemLink title="Faca 1" />
      </ContainerItem>

      <ContainerItem title="Rifles" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink title="Rifle 1" />
      </ContainerItem>

      <ContainerItem title="Luvas" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink title="Rifle 1" />
      </ContainerItem>

      <ContainerItem title="Pistolas" iconSeta={<IconSetaType />} isList={true}>
        <ItemLink title="USP-S" linkRef="USP-S" />
      </ContainerItem>

      <ContainerItem
        title="Submetralhadoras"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink title="Rifle 1" />
      </ContainerItem>

      <ContainerItem
        title="Escopetas"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink title="Rifle 1" />
      </ContainerItem>

      <ContainerItem
        title="Metralhadoras"
        iconSeta={<IconSetaType />}
        isList={true}
      >
        <ItemLink title="Rifle 1" />
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
  top = '10',
}: PropsContainer) => {
  return (
    <div className={classNames('group relative z-20', className)}>
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
          className={`top-${top} invisible absolute max-h-[300px] w-[150px] overflow-y-auto rounded-md bg-[#1C1C24] py-1 text-white delay-100 group-hover:visible`}
        >
          <ul className="mr-2 flex flex-col">{children}</ul>
        </div>
      )}
    </div>
  )
}

export const ItemLink = ({ title, linkRef }: PropsItems) => {
  return (
    <li className="mx-1 rounded px-4 py-2 hover:bg-slate-600">
      <a href={`/categorias/${linkRef}`}>{title}</a>
    </li>
  )
}
