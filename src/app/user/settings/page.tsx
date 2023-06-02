'use client'

import { Button } from "@/components/Button";
import { SettingsInformation, SettingsSecurity } from "@/components/Settings";
import { SettingsTransactions } from "@/components/Settings/Transactions";
import { Title } from "@/components/Title";
import Image from "next/image";

import IconGear from '../../../components/Icons/icon-gear.svg';
import IconPaper from '../../../components/Icons/icon-paper.svg';
import IconLockedShield from '../../../components/Icons/icon-locked-shield.svg';

// CHANGE!
let settingsIndex: 0 | 1 | 2 = 0;

export default function Settings() {
  return(
    <div className="flex justify-center bg-mesh-dark-2 px-[7.5rem] h-screen gap-10">
      {/* Left Side */}
      <div className="flex flex-col gap-2 items-end h-min w-max">
        <div className="flex flex-col items-start gap-6">
          <Title bold={900} size="2xl" color="white">Configurações</Title>
          
          <div>
            <Button
              className="w-full flex gap-2 px-3 py-6 items-center bg-transparent text-zinc-500 font-semibold hover:bg-mesh-dark-0 hover:text-[#3EE167]"
              justify="justify-start"
              rounded="rounded-md"
              // CHANGE FUNCTION
              onClick={() => settingsIndex = 0}
            >
              <Image src={IconGear} width={20} height={20} className="text-red-500 fill-current" alt="Informações Pessoais" />
              <span> Informações Pessoais </span>
            </Button>

            <Button
              className="w-full flex gap-2 px-3 py-6 items-center bg-transparent text-zinc-500 font-semibold hover:bg-mesh-dark-0 hover:text-[#3EE167]"
              justify="justify-start"
              rounded="rounded-md"
              // CHANGE FUNCTION
              onClick={() => settingsIndex = 1}
            >
              <Image src={IconPaper} width={20} height={20} alt="Transações" />
              <span> Transações </span>
            </Button>

            <Button
              className="w-full flex gap-2 px-3 py-6 items-center bg-transparent text-zinc-500 font-semibold hover:bg-mesh-dark-0 hover:text-[#3EE167]"
              justify="justify-start"
              rounded="rounded-md"
              // CHANGE FUNCTION
              onClick={() => settingsIndex = 2}
            >
              <Image src={IconLockedShield} width={20} height={20} alt="Segurança" />
              <span> Segurança </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      {settingsIndex == 0 && <SettingsInformation />}
      {settingsIndex == 1 && <SettingsTransactions />}
      {settingsIndex == 2 && <SettingsSecurity />}
    </div>
  )
}