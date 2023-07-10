// import AllSkins from '@/components/Skins/AllSkins'
import ChoiceItems from '@/components/Others/ChoiceItems'
import PerfilPerson from '@/components/Others/ProfilePerson'

export default function PerfilUsuario() {
  return (
    <main className="mx-auto flex w-4/5 flex-col items-center py-7">
      <PerfilPerson isSeller={false} />
      <ChoiceItems />
      {/* <AllSkins skinsCategories={} itemsPerPage={15} /> */}
    </main>
  )
}
