import { BottomHeader } from './BottomHeader'
import { TopHeader } from './TopHeader'

export default function Header() {
  return (
    <nav className="w-full bg-jet-black">
      <TopHeader />
      <div className="border-b border-t border-mesh-dark-3">
        <BottomHeader />
      </div>
    </nav>
  )
}
