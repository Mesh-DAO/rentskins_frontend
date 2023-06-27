export interface IMetadata {
  title: string
  description: string
}

export interface IStates {
  customMetadata: IMetadata
  setCustomMetadata: (customMetadata: IMetadata) => void
}
