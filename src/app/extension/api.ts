import messagesJson from '../../locales/en/messages.json'

export const defaultSettings: TabulenceSettings = {
  closeEmpty: false,
  closeGrouped: true,
  closePinned: true,
}

const messages = messagesJson as { [key: string]: { message: string } }

export default function chromeApi() {}

chromeApi.getMessage = (key: string, substitutions?: string | string[]): string => {
  try {
    return chrome.i18n.getMessage(key, substitutions)
  }
  catch {
    return messages[key].message || ''
  }
}

chromeApi.getSettings = async () => {
  try {
    return await chrome.runtime.sendMessage({ type: 'getSettings' })
  }
  catch {
    return structuredClone(defaultSettings)
  }
}

chromeApi.saveSettings = async (settings: TabulenceSettings) => {
  try {
    await chrome.runtime.sendMessage({ type: 'saveSettings', payload: settings })
  }
  catch {}
}

chromeApi.getShortcut = async () => {
  try {
    return await chrome.runtime.sendMessage({ type: 'getShortcut' })
  }
  catch {
    return ''
  }
}

chromeApi.openShortcuts = () => {
  try {
    chrome.tabs.create({ url: 'chrome://extensions/shortcuts' })
  }
  catch {}
}
