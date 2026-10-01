import '@fontsource-variable/inter'
import '@fontsource-variable/sora'
import '@fontsource-variable/jetbrains-mono'
import '../styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LanguageProvider from '../i18n/LanguageProvider.jsx'
import AppShell from '../components/AppShell.jsx'
import HomePage from '../pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider page="home">
      <AppShell onHome>
        <HomePage />
      </AppShell>
    </LanguageProvider>
  </StrictMode>,
)
