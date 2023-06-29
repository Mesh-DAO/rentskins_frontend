import AllSkins from '@/components/Skins/AllSkins'
import ChoiceItems from '@/components/ChoiceItems'
import PerfilPerson from '@/components/ProfilePerson'

export default function PerfilUsuario() {
  return (
    <main className="mx-auto flex w-4/5 flex-col items-center py-7">
      <PerfilPerson isSeller={false} />
      <ChoiceItems />
      <AllSkins itemsPerPage={15} />
    </main>
  )
}
