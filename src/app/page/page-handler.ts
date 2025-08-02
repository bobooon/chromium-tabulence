import chromeApi, { defaultSettings } from '../extension/api.ts'

const handler: { [key: string]: (state: TabulenceState, value: any) => void } = {}

interface TabulenceAction { type: string, value: any, dispatch?: (action: TabulenceAction) => void }

handler.loadSettings = async (state, value) => {
  state.settings = { ...value }
}

handler.setClosePinned = (state, value) => {
  state.settings.closePinned = value
}

handler.setCloseGrouped = (state, value) => {
  state.settings.closeGrouped = value
}

handler.setCloseEmpty = (state, value) => {
  state.settings.closeEmpty = value
}

handler.reset = (state) => {
  state.settings = structuredClone(defaultSettings)
}

export default function pageReducer(prevState: TabulenceState, action: TabulenceAction) {
  const state = { ...prevState }
  if (handler[action.type])
    handler[action.type](state, action.value)

  chromeApi.saveSettings(state.settings)
  return state
}
