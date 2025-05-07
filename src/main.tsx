import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './components/layout.tsx'

import { Provider } from "@/components/ui/provider"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Layout>
      </Layout>
    </Provider>
  </StrictMode>,
)
