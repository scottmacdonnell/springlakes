import React, { useState } from 'react'
import Link from 'next/link'

import Avatar from './ui/Avatar'

import styles from '../styles/components/Navbar.module.scss'

export default function Navbar({
  auth,
  mainNav = false,
  invert = false
}) {
  return (
    <div className={`${styles.Navbar} ${invert ? styles.NavbarInvert : ''}`}>
      <div className={styles.NavbarContainer}>
        <Desktop auth={auth} mainNav={mainNav} />
        <Mobile auth={auth} mainNav={mainNav} />
      </div>
    </div>
  )
}

function Mobile({
  auth,
  mainNav = false
}) {
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const toggle = () => setMobileNavShown(!mobileNavShown)
  return (
    <div className={`${styles.Mobile} ${mobileNavShown ? styles.MobileActive : ''}`}>
      <div className={styles.MobileFlag}>
        <Link href="/">
          <a style={{ display: 'contents' }}><Flag /></a>
        </Link>
      </div>

      {mainNav ? (
        <div className={styles.MobileMain}>
          <div className={styles.MobileToggle} onClick={toggle}>
            <div className={styles.IconContainer}>
              <div className={styles.Icon}>
                <div className={styles.TopBar} />
                <div className={styles.BtmBar} />
              </div>
            </div>
          </div>
        </div>
      ) : ''}

      <Link href="/member">
        <div className={styles.MobileMember}>
          <Avatar
            src={auth?.user?.photoUrl}
          />
        </div>
      </Link>

      <div className={styles.MobileContent}>
        <div className={styles.MobileContainer}>
          <div className={styles.MobileWrapper}>
            <MainNav auth={auth} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Desktop({
  auth,
  mainNav = false
}) {
  return (
    <div className={styles.Desktop}>
      <div className={styles.DesktopFlag}>
        <Link href="/">
          <a style={{ display: 'contents' }}><Flag /></a>
        </Link>
      </div>

      <div className={styles.DesktopMain}>
        {mainNav ? <MainNav auth={auth} /> : ''}
      </div>

      <Link href="/member/dashboard">
        <div className={styles.DesktopMember}>
          <Avatar
            src={auth?.user?.photoUrl}
          />
        </div>
      </Link>
    </div>
  )
}

function MainNav({ auth }) {

  console.log()
  return (
    <nav className={styles.MainNav}>
      { auth?.user?.role !== 'member' ? 
        <>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
          <Link href='/about'>
            <a>About Us</a>
          </Link>{' '}
          <Link href='/memberships'>
            <a>Memberships</a>
          </Link>{' '}
          <Link href='/game'>
            <a>Game Improvement</a>
          </Link>{' '}
          <Link href='/clubhouse'>
            <a>Clubhouse</a>
          </Link>{' '}
          <Link href='/events'>
            <a>Events</a>
          </Link>{' '}
          <Link href='/contact'>
            <a>Contact Us</a>
          </Link>
        </>
      :
        <>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
          <Link href='/courses'>
            <a>The Courses</a>
          </Link>{' '}
          <Link href='/memberships'>
            <a>Memberships</a>
          </Link>{' '}
          <Link href='/clubhouse'>
            <a>Clubhouse</a>
          </Link>{' '}
          <Link href='/newsletter'>
            <a>Newsletter</a>
          </Link>{' '}
          <Link href='/events'>
            <a>Events</a>
          </Link>{' '}
          <Link href='/contact'>
            <a>Contact Us</a>
          </Link>
        </>
      }
    </nav>
  )
}

function Flag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 773.68 668.81">
      <path fill="currentColor" d="M.23,0H773.68V233.65a31.37,31.37,0,0,0-2.91,2.6q-146.34,166-292.66,332-42.74,48.46-85.47,96.92c-4.37,5-7.36,4.92-11.77-.06-2.76-3.12-5.49-6.25-8.24-9.37Q188,446.31,3.36,237A12.38,12.38,0,0,1,0,228.08Q.15,118.52.08,9C.08,6,.18,3,.23,0ZM461.06,188.75c5.73,0,10.84-.7,15.66.16a56.51,56.51,0,0,0,23.84-1.15c7.86-1.92,11-7.06,9.33-14.81-.83-3.9-2.1-7.92,1.22-11.65,7.44-8.36,16.88-10.7,27.45-9.25,9.92,1.36,19.76,3.33,29.64-.18a13.81,13.81,0,0,1,4.7-.69c20.58.16,41.15.41,61.72.51,1,0,2.11-1.08,3.17-1.66-.9-.75-1.69-1.93-2.71-2.18-7.1-1.68-14.18-3.64-21.38-4.6-9.43-1.25-19-1.75-28.46-2.4-2.29-.16-4.89,1.08-6.91.39-10.4-3.56-20.57-7.8-31-11.23a43.13,43.13,0,0,0-14-2.06c-7.52.13-15,1.2-22.54,1.85-6.13.54-12.15.09-18.44,1.63-9.77,2.38-20.11,2.49-30.23,3.32-6.89.57-13.81.79-20.72,1a8.35,8.35,0,0,1-4-1.33c-3.81-2.13-7.49-4.48-11.28-6.63-12.89-7.35-27.38-5.57-41.26-6.7-7.6-.62-15.43.77-23.07,1.86-8.68,1.24-17.46,2.45-25.82,4.92-14.6,4.32-28.9,9.64-43.37,14.42a23.37,23.37,0,0,1-7.62,1.44c-4.84-.09-8.75.88-10,5.72-12,1.62-23.78-1.66-35.2,1.29l-.13,1.4,7.26,3.61c-3.39.93-5.42,1.85-7.5,2-4.14.25-8.31.15-12.47.05-3.52-.08-7.55.53-7.89,4.19-.38,4.08,4,4.86,7.31,5.79a2,2,0,0,0,.49,0l16.56,1.3c-.73,1.55-1,3.47-2.13,4.31-3.3,2.49-7,4.43-10.38,6.83-1.28.91-2.08,2.49-3.1,3.77,1.59.92,3.09,2.18,4.81,2.67s3.4.1,5.12.1l.36,1.6c-8,2.79-15.85,6.13-24,8.19-5.35,1.35-11.17,1.24-16.76,1.12-7.24-.16-14.46-.95-21.69-1.52-5.73-.46-11.26-4.2-17.16-1.31-1.42.7-2.39,2.31-3.57,3.5,1.4,1.13,2.65,2.64,4.25,3.28,1.39.55,3.17.11,4.78.11-5.19,1.15-10.44,1.41-15.63,2.11-1.55.21-2.93,1.68-4.39,2.58a31.4,31.4,0,0,0,4,3.25c1.25.73,2.8,1,5.37,1.81l-17.57,4.07V218c3.45.89,6.9,2.51,10.36,2.53,9.76.06,19.53-.52,29.3-.86a9,9,0,0,0,3-.24c7.53-3,15-6.33,22.54-9.23,7.87-3,15.84-5.77,23.82-8.47,4.41-1.49,9.7-1.58,13.27-4.14,8.55-6.15,17.62-3.05,26.71-3.82a64.72,64.72,0,0,0,.06,7.21,38.41,38.41,0,0,0,1.53,6.55c.65,2.12,2.69,4.58,2.12,6.17-1.69,4.74,1.5,6.46,4.06,8.92,1,1,2.2,2.69,2,3.89-1.1,8,.28,11,7.18,14-1,4.86,2,7.89,5.19,11,1.19,1.16,2.82,3.17,2.51,4.36-1.3,5.13,1.36,8.07,4.76,11.07,1.77,1.56,4.32,3.8,4.23,5.61-.3,5.51,1.85,8.72,6.89,10-1.62,5.11,1.17,7.63,4.66,9.75,2.1,1.26,4.87,2.14,3,5.49-2.87,5.18-1,9.23,2.52,13.32a17,17,0,0,1,3.06,6.89c.91,3.6.21,8.12,2.17,10.83,3.18,4.41,3.13,8.9,2.81,13.57-.35,5.14,1.92,8.69,6,11,3.09,1.74,4.2,3.81,4.11,7.34-.16,7.18,5.43,16.24,11.14,17.53,3,.67,3.23,1.91,3.89,4.46,2.78,10.76,7.61,17.24,18.19,15.36.51,5.05.71,10.19,1.69,15.18.49,2.49,2.41,4.71,3.68,7,2.32-1.37,4.69-2.68,6.94-4.15s4.33-3.1,7.28-5.23c0,6.05-.15,10.54.06,15,.12,2.65.67,5.28,4.32,5.46s5.5-1.5,6.59-4.66c1.25-3.62,2.57-7.23,3.86-10.84l1.54.15a60.77,60.77,0,0,0,.66,7.79c.78,3.75,1.51,7.67,3.23,11,.89,1.7,4.67,3.71,5.78,3.1a11.18,11.18,0,0,0,4.71-6.37c1-3.57.6-7.51,1.29-11.2.33-1.75,1.79-3.28,2.73-4.91a28.07,28.07,0,0,1,2.1,4.87c1.42,6.14,2.34,12.41,4.11,18.43.46,1.54,3.49,3.38,5.12,3.19,1.43-.16,3.31-2.84,3.64-4.66a105.88,105.88,0,0,0,1.14-13.23c.34-5.81.57-11.63.85-17.44,1.74,5.53,2.13,11.1,3.32,16.49.76,3.41,2.33,7.64,6.8,7,4.09-.59,6.13-3.91,6-8.35-.4-19.08-.31-38.19-1.17-57.24-.49-10.75-2.48-21.42-3.79-32.13-.7-5.73-1.38-11.47-2.1-17.4,5.5,1.66,7.8.08,8-5.19.14-3.72,0-7.46,0-11.72,3.2,5.84,5.88,11.19,9.07,16.23.95,1.5,3.8,3.32,4.9,2.86a7.5,7.5,0,0,0,3.82-5c.58-3.79.17-7.74.17-12.39a15.5,15.5,0,0,1,1.73,2.18c1.71,3.91,4.79,5.94,8.68,4.23s2.6-5.22,1.71-8.6c-1.65-6.28-2.9-12.67-4.1-19.06-2.72-14.55-4.81-29.25-8.07-43.68C469.76,219.48,465.24,204.39,461.06,188.75Z"/>
      <path fill="currentColor" d="M445.27,139.72c17.79.72,36,3.65,53.33-3.65L497.49,135c-3.07,3.77-6.22,7.47-9.2,11.31-3.55,4.58-6.44,9.39-6.1,15.61.21,3.77-1.37,5.89-5.85,6-10.42.22-17-5.31-22.1-13.5C451.33,149.66,448.47,144.94,445.27,139.72Z"/>
    </svg>
  )
}