import { LayoutFooter } from './Footer/LayoutFooter'
import { LayoutHeaderBottom } from './Header/LayoutHeaderBottom'
import { LayoutHeaderRoot } from './Header/LayoutHeaderRoot'
import { LayoutHeaderTop } from './Header/LayoutHeaderTop'
import { LayoutRoot } from './LayoutRoot'

const Layout = {
  Footer: LayoutFooter,
  Header: {
    Bottom: LayoutHeaderBottom,
    Root: LayoutHeaderRoot,
    Top: LayoutHeaderTop,
  },
  Root: LayoutRoot,
}

export default Layout
