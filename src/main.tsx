import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import AppRouter from './AppRouter'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)

root.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>
)
