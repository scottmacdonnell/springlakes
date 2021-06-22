import { motion } from 'framer-motion'

import Page from '../components/Page'
import Navbar, { NavbarPublic } from '../components/Navbar'
import { IndexHeader, HeaderBackground, HeaderImageOverlay } from '../components/Header'
import Hallway, { HallwayPublic } from '../components/Hallway'
import Footer, { FooterPublic } from '../components/Footer'
import { Heading1, SHeading, Anchor } from '../components/ui/Text'
import Box, { BoxFlex, BoxGrid } from '../components/utils/Box'

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
        <header>
          <Navbar>
            <NavbarPublic
              animated
              invertColor
              noNav
            />
          </Navbar>
        </header>

        <main>
          <IndexHeader>
            <HeaderBackground
              href="/images/index/header.jpg"
            />
            
            <HeaderImageOverlay>
              <BoxGrid
                desktopColumns="1fr"
                mobileColumns="1fr"
                desktopRows="1fr 1fr 1fr"
                mobileRows="1fr 1fr 1fr"
                style={{ height: '100%', padding: '6rem 0 2rem 0' }}
              >
                <BoxFlex
                  direction="column"
                  justify="flex-start"
                  align="center"
                />

                <BoxFlex
                  direction="column"
                  justify="center"
                  align="center"
                  style={{ margin: '0 1rem' }}
                >
                  <Heading1
                    BaronNeue
                  >Spring Lakes Golf Club</Heading1>

                  <SHeading
                    style={{ color: '#eaeaea' }}
                  >Canada’s Only Private 54 Hole Golf Course</SHeading>
                </BoxFlex>

                <BoxFlex
                  direction="column"
                  justify="flex-end"
                  align="center"
                >
                  <Anchor href="#main">
                    <svg 
                      viewBox="0 0 24 24"
                      width="3rem"
                      height="3rem"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      shapeRendering="geometricPrecision"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </Anchor>
                </BoxFlex>
              </BoxGrid>
            </HeaderImageOverlay>
          </IndexHeader>

          <MainLink />

          <Hallway>
            <HallwayPublic />
          </Hallway>

          {/* <Box>
            <FormContact />
          </Box> */}
        </main>

        

        <footer>
          <Footer>
            <FooterPublic />
          </Footer>
        </footer>
      </motion.div>
    </Page>
  )
}

function MainLink() {
  return <div id="main" />
}