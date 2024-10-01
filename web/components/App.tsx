import { useGadget } from '@gadgetinc/react-shopify-app-bridge'
import { Outlet } from '@remix-run/react'
import { Page } from '@shopify/polaris'
import { FullPageSpinner } from '@/components/FullPageSpinner'

export function AuthenticatedApp() {
  const { isAuthenticated, loading } = useGadget()

  if (loading) {
    return <FullPageSpinner />
  }

  return isAuthenticated ? <EmbeddedApp /> : <Unauthenticated />
}

function Unauthenticated() {
  return (
    <Page title='Unauthorized'>
      <p className='text-neutral-600'>
        You must be logged in to Shopify to access this app.
      </p>
    </Page>
  )
}

function EmbeddedApp() {
  return <Outlet />
}
