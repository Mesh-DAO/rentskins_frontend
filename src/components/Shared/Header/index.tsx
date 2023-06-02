import { BottomHeader } from './BottomHeader'
import { TopHeader } from './TopHeader'

export default function Header() {
  return (
    <nav className="w-full bg-jet-black">
      <TopHeader />
      <BottomHeader />
    </nav>
  )
}
