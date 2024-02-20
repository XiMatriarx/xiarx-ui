import React, {createContext, useContext, useState, useEffect} from 'react'

import type {FC, ReactNode} from 'react'

enum Theme {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const system: Theme.LIGHT | Theme.DARK =
  (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) ?
    Theme.DARK
  : Theme.LIGHT

const getTheme = (): Theme => {
  const theme = JSON.parse(localStorage.getItem('theme') || 'null')

  return (
    !theme || theme === Theme.SYSTEM ? Theme.SYSTEM
    : theme === 'light' ? Theme.LIGHT
    : Theme.DARK
  )
}

const setTheme = (theme: Theme): void =>
  localStorage.setItem('theme', JSON.stringify(theme))

const ThemeContext = createContext({} as ThemeContext)

export const useTheme = () => useContext(ThemeContext)

const variables = [
  'color-background',
  'color-background-highlight',
  'color-page',
  'color-header',
  'color-navigation',
  'color-text',
  'color-text-highlight',
]

const setStyle = (theme: Theme) => {
  const style = theme === Theme.SYSTEM ? system : theme

  for (const variable of variables) {
    document.documentElement.style.setProperty(
      '--' + variable,
      'var(--' + style + '-' + variable + ')',
    )
  }
}

setStyle(system)

interface ThemeProvider {
  children?: ReactNode | undefined
}

const ThemeProvider: FC<ThemeProvider> = (props) => {
  const [theme, loadTheme] = useState<Theme>(getTheme())

  useEffect(() => {
    setStyle(theme)
  }, [])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
      loadTheme(theme)
    },
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
