import { Meta, Links, Scripts, ScrollRestoration } from '@remix-run/react'
import { AppProvider } from '@shopify/polaris'

import {
  AppType,
  Provider as GadgetProvider
} from '@gadgetinc/react-shopify-app-bridge'

import { Suspense } from 'react'
import { api } from './api'
import { AuthenticatedApp } from './components/App'
import { FullPageSpinner } from './components/FullPageSpinner'

import polarisStyles from '@shopify/polaris/build/esm/styles.css?url'
import enTranslations from '@shopify/polaris/locales/en.json'
import globalStyles from './styles/globals.css?url'

export const links = () => [
  { rel: 'stylesheet', href: globalStyles },
  {
    rel: 'stylesheet',
    href: polarisStyles
  },
  {
    rel: 'stylesheet',
    href: 'https://assets.gadget.dev/assets/reset.min.css'
  }
]

export const meta = () => [
  { charset: 'utf-8' },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  },
  {
    name: 'shopify-api-key',
    suppressHydrationWarning: true,
    content: '%SHOPIFY_API_KEY%'
  }
]

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <script src='https://cdn.shopify.com/shopifycloud/app-bridge.js'></script>
        <script suppressHydrationWarning>/* --GADGET_CONFIG-- */</script>
        <Links />
      </head>
      <body>
        <Suspense fallback={<FullPageSpinner />}>{children}</Suspense>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <GadgetProvider
      type={AppType.Embedded}
      shopifyApiKey={window.gadgetConfig.apiKeys.shopify}
      api={api}
    >
      <AppProvider i18n={enTranslations}>
        <AuthenticatedApp />
      </AppProvider>
    </GadgetProvider>
  )
}

export function HydrateFallback() {
  return <FullPageSpinner />
}
