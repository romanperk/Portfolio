import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { locale, t } from './i18n'

document.documentElement.lang = locale
document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Built pages arrive prerendered by scripts/prerender.js; the dev server sends an empty root.
if (root.firstChild) hydrateRoot(root, app)
else createRoot(root).render(app)
