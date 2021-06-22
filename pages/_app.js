import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'

export default function SpringLakesGolfClub({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        {/* WebKit Support Tag */}
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}