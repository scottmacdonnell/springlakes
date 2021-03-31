import { useRouter } from 'next/router'

import Page from '../../components/Page'
import EmailAuth from '../../components/EmailAuth'

import { useAuth } from '../../lib/auth'

export default function MemberEmailAuth() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member')
    console.log("Logged In...")
  }
  
  return (
    <Page
      className="MemberEmailAuth"
      pageName="Email Log In"
      slug="/member/emailauth"
    >
      { auth.user ? <div /> : (
        <>
          <header id="header">
            
          </header>

          <main id="main">
            <EmailAuth auth={auth} />
          </main>
        
          <footer id="footer">
            
          </footer>
        </>
      )}
    </Page>
  )
}