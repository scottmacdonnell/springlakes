import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import CookiePolicy from '../../components/CookiePolicy'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Cookies() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="Cookies"
      pageName="Cookie Policy"
      slug="/legal/cookies"
    >
      <header>
        <Navbar auth={auth} mainNav invert />
      </header>

      <main>
        <CookiePolicy />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}