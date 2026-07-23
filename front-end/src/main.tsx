import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './router/index.js'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import theme from './theme/index.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
)
