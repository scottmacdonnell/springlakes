import Logo from '../components/Logo'
import Social, { TwitterLink, FacebookLink, InstagramLink } from '../components/Social'

import {
  Heading6,
  Anchor
} from './ui/Text'

import Container from './utils/Container'
import SafeArea from './utils/SafeArea'

import styles from '../styles/components/Footer.module.scss'

export default function Footer(props) {
  return (
    <FooterWrapper>
      {props.children}
    </FooterWrapper>
  )
}

export const FooterPublic = () => {
  return (
    <>
      <Directory>
        <Nav>
          <NavTitle>Main</NavTitle>

          <NavContent>
            <NavItem href="/">Homepage</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/memberships">Memberships</NavItem>
            <NavItem href="/game">Game Improvement</NavItem>
            <NavItem href="/clubhouse">Clubhouse</NavItem>
            <NavItem href="/events">Events</NavItem>
            <NavItem href="/contact">Contact Us</NavItem>
          </NavContent>
        </Nav>

        <Nav>
          <NavTitle>Member</NavTitle>

          <NavContent>
            <NavItem href="/member/login">Login</NavItem>
            <NavItem href="/member/signup">Sign Up</NavItem>
          </NavContent>
        </Nav>

        <Nav>
          <NavTitle>Legal</NavTitle>

          <NavContent>
            <NavItem href="/legal/privacy">Privacy Policy</NavItem>
            <NavItem href="/legal/terms">Terms of Service</NavItem>
            <NavItem href="/legal/cookie">Cookie Policy</NavItem>
          </NavContent>
        </Nav>
      </Directory>

      <Info>
        <Tagline>
          <Organization>
            <OrganizationLogo>
              <Logo color="136, 136, 136" />
            </OrganizationLogo>

            <OrganizationName>Spring Lakes Golf Club</OrganizationName>
          </Organization>

          <Copyright>© 2021 Spring Lakes Golf Club. All Rights Reserved.</Copyright>
        </Tagline>

        <SocialWrapper>
          <Social>
            <FacebookLink
              username="springlakesgolf"
            />
            <TwitterLink
              username="macdonnellscott"
            />
            <InstagramLink
              username="scott.macdonnell"
            />
          </Social>
        </SocialWrapper>
      </Info>
    </>
  )
}

export const FooterMember = () => {
  return (
    <>
      <Directory>
        <Nav>
          <NavTitle>Main</NavTitle>

          <NavContent>
            <NavItem href="/">Homepage</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/memberships">Memberships</NavItem>
            <NavItem href="/game">Game Improvement</NavItem>
            <NavItem href="/clubhouse">Clubhouse</NavItem>
            <NavItem href="/events">Events</NavItem>
            <NavItem href="/contact">Contact Us</NavItem>
          </NavContent>
        </Nav>

        <Nav>
          <NavTitle>Club</NavTitle>

          <NavContent>
            <NavItem href="/courses">The Courses</NavItem>
            <NavItem href="/courses/north">North Course</NavItem>
            <NavItem href="/courses/south">South Course</NavItem>
            <NavItem href="/courses/east">East Course</NavItem>
          </NavContent>
        </Nav>

        <Nav>
          <NavTitle>Member</NavTitle>

          <NavContent>
            <NavItem href="/member/login">Login</NavItem>
            <NavItem href="/member/signup">Sign Up</NavItem>
          </NavContent>
        </Nav>

        <Nav>
          <NavTitle>Legal</NavTitle>

          <NavContent>
            <NavItem href="/legal/privacy">Privacy Policy</NavItem>
            <NavItem href="/legal/terms">Terms of Service</NavItem>
            <NavItem href="/legal/cookie">Cookie Policy</NavItem>
          </NavContent>
        </Nav>
      </Directory>

      <Info>
        <Tagline>
          <Organization>
            <OrganizationLogo>
              <Logo color="136, 136, 136" />
            </OrganizationLogo>

            <OrganizationName>Spring Lakes Golf Club</OrganizationName>
          </Organization>

          <Copyright>© 2021 Spring Lakes Golf Club. All Rights Reserved.</Copyright>
        </Tagline>

        <SocialWrapper>
          <Social>
            <FacebookLink
              username="springlakesgolf"
            />
            <TwitterLink
              username="macdonnellscott"
            />
            <InstagramLink
              username="scott.macdonnell"
            />
          </Social>
        </SocialWrapper>
      </Info>
    </>
  )
}

function FooterWrapper(props) {
  return (
    <section id="footer" className={styles.FooterWrapper}>
      <Container>
        <div className={styles.Footer} {...props} />
      </Container>
      <SafeArea bottom />
    </section>
  )
}

export function Directory(props) {
  return <div className={styles.Directory} {...props} />
}

export function Nav(props) {
  return <nav className={styles.Nav} {...props} />
}

export function NavContent(props) {
  return <ul {...props} />
}

export function NavItem({
  children,
  href,
  isExternal = false
}) {
  return (
    <li className={styles.NavItem}>
      <Anchor
        href={href}
        isExternal={isExternal}
      >
        <span>{children}</span>
      </Anchor>
    </li>
  )
}

export function NavTitle(props) {
  return <span className={styles.NavTitle}><strong {...props} /></span>
}

export function Info(props) {
  return <div className={styles.Info} {...props} />
}

export function Tagline(props) {
  return <div className={styles.Tagline} {...props} />
}

export function Organization(props) {
  return <div className={styles.Organization} {...props} />
}

export function OrganizationLogo(props) {
  return <div className={styles.OrganizationLogo} {...props} />
}

export function OrganizationName(props) {
  return (
    <div className={styles.OrganizationName}>
      <Heading6 {...props} />
    </div>
  )
}

export function Copyright(props) {
  return (
    <div className={styles.Copyright}>
      <span {...props} />
    </div>
  )
}

export function SocialWrapper(props) {
  return <div className={styles.SocialWrapper} {...props} />
}