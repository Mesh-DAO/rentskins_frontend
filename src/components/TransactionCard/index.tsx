import { TransactionButton } from './TransactionButton'
import { TransactionActions } from './TransactionActions'
import { TransactionContent } from './TransactionContent'
import { TransactionImage } from './TransactionImage'
import { TransactionLabel } from './TransactionLabel'
import TransactionRoot from './TransactionRoot'

const TransactionCard = {
  Root: TransactionRoot,
  Image: TransactionImage,
  Label: TransactionLabel,
  Content: TransactionContent,
  Actions: TransactionActions,
  Button: TransactionButton,
}

export default TransactionCard
