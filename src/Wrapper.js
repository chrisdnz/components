import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './themes'

export default function Wrapper({ children }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
