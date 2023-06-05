"use client"
import AllSkins from '@/components/AllSkins';
import ChoiceItems from '@/components/ChoiceItems';
import PerfilPerson from '@/components/ProfilePerson';
import { LayoutPage } from '@/components/Shared';

export default function Perfil() {
  return (
    <LayoutPage>
      <main className="flex flex-col items-center w-4/5 mx-auto py-7">
        <PerfilPerson />
        <ChoiceItems thereIsRented={true} />
        <AllSkins />
      </main>
    </LayoutPage>
  )
}