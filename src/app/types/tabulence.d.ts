declare global {
  interface TabulenceSettings {
    closeEmpty: boolean
    closeGrouped: boolean
    closePinned: boolean
  }

  interface TabulenceState {
    errors: { [key: string]: string }
    settings: TabulenceSettings
  }
}

export {}
