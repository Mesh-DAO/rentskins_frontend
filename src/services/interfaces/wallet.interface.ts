export interface IWalletUser {
  data: {
    id: string
    owner_name: string
    owner_id: string
    value: string
    createdAt: string
    updatedAt: string | null
    deletedAt: string | null
  }
}
