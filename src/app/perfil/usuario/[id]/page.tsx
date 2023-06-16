import AllSkins from '@/components/Skins/AllSkins'
import ChoiceItems from '@/components/ChoiceItems'
import PerfilPerson from '@/components/ProfilePerson'
import { LayoutPage } from '@/components/Shared'

export default function PerfilUsuario() {
  return (
    <LayoutPage>
      <main className="mx-auto flex w-4/5 flex-col items-center py-7">
        <PerfilPerson isSeller={false} />
        <ChoiceItems />
        <AllSkins itemsPerPage={15} />
      </main>
    </LayoutPage>
  )
}
