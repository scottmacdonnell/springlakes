import { motion } from 'framer-motion'

import Page from '../components/Page'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const pageVariants = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.5, ...transition } },
}

export default function IndexPage() {
  return (
    <Page
      slug="/"
      className="IndexPage"
    >
      <motion.div
        variants={pageVariants}
      >
        <header></header>

        <main>
          <h1>Spring Lakes Golf Club</h1>
        </main>

        <footer></footer>
      </motion.div>
    </Page>
  )
}