import { LayoutFooter } from './LayoutFooter'
import { LayoutHeaderBottom } from './Header/LayoutHeaderBottom'
import { LayoutHeaderRoot } from './Header/LayoutHeaderRoot'
import { LayoutHeaderTop } from './Header/LayoutHeaderTop'
import { LayoutRoot } from './LayoutRoot'
import { LayoutNavigator } from './LayoutNavigator'

const Layout = {
  Footer: LayoutFooter,
  Navigator: LayoutNavigator,
  Header: {
    Bottom: LayoutHeaderBottom,
    Root: LayoutHeaderRoot,
    Top: LayoutHeaderTop,
  },
  Root: LayoutRoot,
}

export default Layout
