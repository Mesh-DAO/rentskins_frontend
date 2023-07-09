import ChoiceItems from '@/components/Others/ChoiceItems'
import PerfilPerson from '@/components/Others/ProfilePerson'
import AllSkins from '@/components/Others/Skins/AllSkins'

export default function PerfilUsuario() {
  return (
    <main className="mx-auto flex w-4/5 flex-col items-center py-7">
      <PerfilPerson isSeller={false} />
      <ChoiceItems />
      <AllSkins itemsPerPage={15} />
    </main>
  )
}
