import { PageDetailsCard } from './PageDetails/PageDetailsCard'
import { PageDetailsPerfil } from './PageDetails/PageDetailsPerfil'
import { PageDetailsSkin } from './PageDetails/PageDetailsSkin'
import { PageDetailsVendas } from './PageDetails/PageDetailsVendas'
import { PageFAQ } from './PageFAQ/PageFAQ'
import { PageInventoryLeft } from './PageInventory/PageInventoryLeft'
import { PageInventoryMiddle } from './PageInventory/PageInventoryMiddle'
import { PageInventoryRight } from './PageInventory/PageInventoryRight'
import { PageNotificationHistoric } from './PageNotification/PageNotificationHistoric'
import { PageNotificationTransaction } from './PageNotification/PageNotificationTransaction'
import { PagePaymentRechargeMastercard } from './PagePayment/PagePaymentRecharge/PagePaymentRechargeMastercard'
import { PagePaymentRechargePix } from './PagePayment/PagePaymentRecharge/PagePaymentRechargePix'
import { PagePaymentRechargeTicket } from './PagePayment/PagePaymentRecharge/PagePaymentRechargeTicket'
import { PagePaymentWithdrawDocument } from './PagePayment/PagePaymentWithdraw/PagePaymentWithdrawDocument'
import { PagePaymentWithdrawLocation } from './PagePayment/PagePaymentWithdraw/PagePaymentWithdrawLocation'
import { PagePaymentWithdrawPersonal } from './PagePayment/PagePaymentWithdraw/PagePaymentWithdrawPersonal'
import { PagePaymentWithdrawTransaction } from './PagePayment/PagePaymentWithdraw/PagePaymentWithdrawTransaction'
import { PageSettingsInformation } from './PageSettings/PageSettingsInformation'
import { PageSettingsSecurity } from './PageSettings/PageSettingsSecurity'
import { PageSettingsTransactionsContent } from './PageSettings/Transactions/PageSettingsTransactionsContent'
import { PageSettingsTransactionsTable } from './PageSettings/Transactions/PageSettingsTransactionsTable'
import { PageSummaryCart } from './PageSummary/PageSummaryCart'
import { PageSummaryInfo } from './PageSummary/PageSummaryInfo'

const Pages = {
  Details: {
    Card: PageDetailsCard,
    Perfil: PageDetailsPerfil,
    Skin: PageDetailsSkin,
    Vendas: PageDetailsVendas,
  },

  FAQ: PageFAQ,

  Inventory: {
    Left: PageInventoryLeft,
    Middle: PageInventoryMiddle,
    Right: PageInventoryRight,
  },

  Notification: {
    Historic: PageNotificationHistoric,
    Transaction: PageNotificationTransaction,
  },

  Payment: {
    Recharge: {
      Mastercard: PagePaymentRechargeMastercard,
      Pix: PagePaymentRechargePix,
      Ticket: PagePaymentRechargeTicket,
    },
    Withdraw: {
      Document: PagePaymentWithdrawDocument,
      Location: PagePaymentWithdrawLocation,
      Personal: PagePaymentWithdrawPersonal,
      Transaction: PagePaymentWithdrawTransaction,
    },
  },

  Settings: {
    Transactions: {
      Content: PageSettingsTransactionsContent,
      Table: PageSettingsTransactionsTable,
    },
    Information: PageSettingsInformation,
    Security: PageSettingsSecurity,
  },

  Summary: {
    Cart: PageSummaryCart,
    Info: PageSummaryInfo,
  },
}

export default Pages
