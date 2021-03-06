import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Index() {
  const auth = useAuth()

  return (
    <Page
      className="Index"
      slug="/"
    >
      <header>
        <Navbar auth={auth} />
      </header>

      <main>
        <Banner
          title="Spring Lakes Golf Club"
          image={auth?.user?.role !== 'member' ? "/images/index/public/banner.jpg" : "/images/index/members/banner.jpg" }
          chevron="#main"
          alignImage="top"
          subtitle
          auth={auth}
          index
        />

        <div id="main" />
        <Hallway auth={auth} />
      </main>

      <footer>
        <Footer auth={auth} />
      </footer>
    </Page>
  )
}