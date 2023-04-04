import React, { useState } from 'react'
export type CustomThemeColor = 'LIGHT' | 'DARK'
interface ThemeContextData {
  theme: CustomThemeColor
  setTheme: (color: CustomThemeColor) => void
}

const CustomThemeContext = React.createContext<ThemeContextData>({ theme: 'LIGHT', setTheme: (color: CustomThemeColor) => {} })

export const CustomThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<CustomThemeColor>('LIGHT')
  return <CustomThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </CustomThemeContext.Provider>
}

export const useCustomTheme = () => {
  return React.useContext(CustomThemeContext)
}
