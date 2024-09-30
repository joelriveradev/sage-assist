import { useGadget } from '@gadgetinc/react-shopify-app-bridge'
import { Outlet, Link } from '@remix-run/react'
import { NavMenu } from '@shopify/app-bridge-react'
import { Page } from '@shopify/polaris'
import { FullPageSpinner } from './FullPageSpinner'

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
      <p className='text-zinc-600'>
        You must be logged in to Shopify to access this app.
      </p>
    </Page>
  )
}

function EmbeddedApp() {
  return (
    <>
      <NavMenu>
        <Link to='/' rel='home'>
          Shop Information
        </Link>
        <Link to='/about'>About</Link>
      </NavMenu>
      <Outlet />
    </>
  )
}
