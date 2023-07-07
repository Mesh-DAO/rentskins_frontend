import { ModalConnectInventoryForm } from './ModalConnectInventory/ModalConnectInventoryForm'
import { ModalConnectInventoryMain } from './ModalConnectInventory/ModalConnectInventoryMain'
import ModalFiltersCategory from './ModalFilters/ModalFiltersCategory'
import ModalFiltersMain from './ModalFilters/ModalFiltersMain'
import ModalFiltersPrice from './ModalFilters/ModalFiltersPrice'
import ModalFiltersStandard from './ModalFilters/ModalFiltersStandard'
import ModalFiltersWear from './ModalFilters/ModalFiltersWear'
import { ModalNotificationFilter } from './ModalNotification/ModalNotificationFilter'
import { ModalNotificationPopup } from './ModalNotification/ModalNotificationPopup'
import { ModalPaymentAdd } from './ModalPayment/ModalPaymentAdd'
import { ModalPaymentCheck } from './ModalPayment/ModalPaymentCheck'
import { ModalPaymentMain } from './ModalPayment/ModalPaymentMain'
import { ModalPaymentRetrieveMain } from './ModalPayment/ModalPaymentRetrieve/ModalPaymentRetrieveMain'
import { ModalPaymentRetrieveSelection } from './ModalPayment/ModalPaymentRetrieve/ModalPaymentRetrieveSelection'
import { ModalPaymentRetrieveWarning } from './ModalPayment/ModalPaymentRetrieve/ModalPaymentRetrieveWarning'
import ModalRefundInformationCard from './ModalRefund/ModalRefundInformation/ModalRefundInformationCard'
import { ModalRefundInformationMain } from './ModalRefund/ModalRefundInformation/ModalRefundInformationMain'
import ModalRefundKYC from './ModalRefund/ModalRefundKYC'
import { ModalRefundMain } from './ModalRefund/ModalRefundMain'
import ModalRefundMethodInformationMain from './ModalRefund/ModalRefundMethod/ModalRefundMethodInformation/ModalRefundMethodInformationMain'
import { ModalRefundMethodInformationPayment } from './ModalRefund/ModalRefundMethod/ModalRefundMethodInformation/ModalRefundMethodInformationPayment'
import ModalRefundMethodMain from './ModalRefund/ModalRefundMethod/ModalRefundMethodMain'
import { ModalSkinShowcaseInfo } from './ModalSkinShowcase/ModalSkinShowcaseInfo'
import { ModalSkinShowcaseMain } from './ModalSkinShowcase/ModalSkinShowcaseMain'
import { ModalSkinShowcaseSkin } from './ModalSkinShowcase/ModalSkinShowcaseSkin'

const Modal = {
  ConnectInventory: {
    Form: ModalConnectInventoryForm,
    Main: ModalConnectInventoryMain,
  },

  Filters: {
    Main: ModalFiltersMain,
    Category: ModalFiltersCategory,
    Price: ModalFiltersPrice,
    Standard: ModalFiltersStandard,
    Wear: ModalFiltersWear,
  },

  Notification: {
    Filter: ModalNotificationFilter,
    Popup: ModalNotificationPopup,
  },

  Payment: {
    Retrieve: {
      Main: ModalPaymentRetrieveMain,
      Selection: ModalPaymentRetrieveSelection,
      Warning: ModalPaymentRetrieveWarning,
    },
    Add: ModalPaymentAdd,
    Check: ModalPaymentCheck,
    Main: ModalPaymentMain,
  },

  Refund: {
    Information: {
      Card: ModalRefundInformationCard,
      Main: ModalRefundInformationMain,
    },
    Method: {
      Information: {
        Main: ModalRefundMethodInformationMain,
        Payment: ModalRefundMethodInformationPayment,
      },
      Main: ModalRefundMethodMain,
    },
    KYC: ModalRefundKYC,
    Main: ModalRefundMain,
  },

  SkinShowcase: {
    Info: ModalSkinShowcaseInfo,
    Main: ModalSkinShowcaseMain,
    Skin: ModalSkinShowcaseSkin,
  },
}

export default Modal
