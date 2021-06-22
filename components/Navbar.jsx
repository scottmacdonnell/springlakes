import React, { useState } from 'react'
import MediaQuery from 'react-responsive'

import Flag from './Flag'
import Avatar from './ui/Avatar'

import {
  Heading3,
  Heading6,
  Paragraph,
  Small,
  Anchor
} from './ui/Text'

import Container from './utils/Container'
import SafeArea from './utils/SafeArea'

import styles from '../styles/components/Navbar.module.scss'

const breakpoints = {
  min: '414px',
  small: '596px',
  medium: '768px',
  large: '992px',
  desktop: '1080px',
  max: '1112px'
}

export default function Navbar(props) {
  return (
    <NavbarWrapper {...props}>
      {props.children}
    </NavbarWrapper>
  )
}

export const NavbarPublic = (props) => {
  const [mobileActive, setMobileActive] = useState(false)
  const toggle = () => setMobileActive(!mobileActive)

  return (
    <>
      <NavbarStart>
        <Anchor
          href="/"
        >
          { !props.animated ? props.invertColor ? <Flag color="255, 255, 255" /> : <Flag color="0, 0, 0" /> : props.invertColor ? <Flag color="255, 255, 255" animated /> : <Flag color="0, 0, 0" animated /> }
        </Anchor>
      </NavbarStart>

      <MediaQuery minWidth={breakpoints.medium}>
        <NavbarCenter>
          { props.noNav ? '' : <PublicNav invertColor={props.invertColor} /> }
        </NavbarCenter>

        <NavbarEnd>
          <Anchor
            href="/test"
          >
            <Avatar src={props.user?.photoUrl} color={ props.invertColor ? '#ffffff' : 'currentColor' } />
          </Anchor>
        </NavbarEnd>
      </MediaQuery>

      <MediaQuery maxWidth={breakpoints.medium}>
        <NavbarCenter>
          <Anchor
            href="/test"
          >
            <Avatar src={props.user?.photoUrl} color={ props.invertColor ? '#ffffff' : 'currentColor' } />
          </Anchor>
        </NavbarCenter>

        <NavbarEnd>
          <Toggle active={mobileActive} onClick={toggle} />
          <MobileNav active={mobileActive}>
            <PublicNav />
          </MobileNav>
        </NavbarEnd>
      </MediaQuery>
    </>
  )
}

const PublicNav = (props) => {
  return (
    <nav style={props.invertColor ? { color: '#ffffff' } : { color: 'currentColor' } }>
      <NavItem href='/about'>About Us</NavItem>
      <NavItem href='/memberships'>Memberships</NavItem>
      <NavItem href='/game'>Game Improvement</NavItem>
      <NavItem href='/clubhouse'>Clubhouse</NavItem>
      <NavItem href='/events'>Events</NavItem>
      <NavItem href='/contact'>Contact Us</NavItem>
    </nav>
  )
}

function NavbarWrapper(props) {
  return (
    <section id="navbar" className={styles.NavbarWrapper}>
      <SafeArea top />
      <Container>
        <div className={styles.Navbar} {...props} />
      </Container>
    </section>
  )
}

function NavbarStart(props) {
  return <div className={styles.NavbarStart} {...props} />
}

function NavbarCenter(props) {
  return <div className={styles.NavbarCenter} {...props} />
}

function NavbarEnd(props) {
  return <div className={styles.NavbarEnd} {...props} />
}

function Toggle({ active, onClick }) {
  return (
    <div className={`${styles.Toggle} ${active ? styles.ToggleActive : ''}`} onClick={onClick}>
      <div className={styles.IconContainer}>
        <div className={styles.Icon}>
          <div className={styles.TopBar} />
          <div className={styles.BtmBar} />
        </div>
      </div>
    </div>
  )
}

function MobileNav({ children, active }) {
  return (
    <div className={`${styles.MobileNav} ${active ? styles.MobileNavActive : ''}`}>
      <div className={styles.MobileContainer}>
        <div className={styles.MobileWrapper}>
          {children}
        </div>
      </div>
    </div>
  )
}

function NavItem({ children, href }) {
  return (
    <>
      <MediaQuery minWidth={breakpoints.medium}>
        <Anchor href={href}>
          <Paragraph>{children}</Paragraph>
        </Anchor>
      </MediaQuery>

      <MediaQuery maxWidth={breakpoints.medium}>
        <Anchor href={href}>
          <Heading3>{children}</Heading3>
        </Anchor>
      </MediaQuery>
    </>
  )
}