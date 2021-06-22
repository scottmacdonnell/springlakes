import Image from 'next/image'

import Container from './utils/Container'
import SafeArea from './utils/SafeArea'

import styles from '../styles/components/Header.module.scss'

export default function Header(props) {
  return (
    <HeaderWrapper>
      {props.children}
    </HeaderWrapper>
  )
}

export function IndexHeader(props) {
  return (
    <section id="header" className={styles.IndexHeaderWrapper}>
      <SafeArea top />
      <div className={styles.Header} {...props} />
    </section>
  )
}

function HeaderWrapper(props) {
  return (
    <section id="header" className={styles.HeaderWrapper}>
      <SafeArea top />
      <div className={styles.Header} {...props} />
    </section>
  )
}

export function HeaderBackground({ href }) {
  return (
    <div className={styles.HeaderBackground}>
      {!href ? '' : (
        <Image 
          src={href}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
    </div>
  )
}

export function HeaderImageOverlay(props) {
  return (
    <div className={styles.HeaderImageOverlay}>
      <div className={styles.HeaderContent}>
        {props.children}
      </div>
    </div>
  )
}