'use client'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { orange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    danger: orange[500]
  },
  zIndex: {
    appBar: 1300
  }
})

declare module '@mui/material/styles' {
  interface Palette {
    danger: string
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    danger: string
  }
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
export default ThemeProvider
