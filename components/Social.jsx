import { Anchor } from './ui/Text'

import TwitterIcon from './icons/TwitterIcon'
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'

import styles from '../styles/components/Social.module.scss'

export default function Social(props) {
  return (
    <div
      className={styles.Social}
    >
      {props.children}
    </div>
  )
}

export function TwitterLink({ username }) {
  return (
    <span
      className={styles.Twitter}
    >
      <Anchor
        href={`https://twitter.com/${username}`}
        isExternal
      >
        <TwitterIcon />
      </Anchor>
    </span>
  )
}

export function FacebookLink({ username }) {
  return (
    <span
      className={styles.Facebook}
    >
      <Anchor
        href={`https://www.facebook.com/${username}`}
        isExternal
      >
        <FacebookIcon />
      </Anchor>
    </span>
  )
}

export function InstagramLink({ username }) {
  return (
    <span
      className={styles.Instagram}
    >
      <Anchor
        href={`https://instagram.com/${username}`}
        isExternal
      >
        <InstagramIcon />
      </Anchor>
    </span>
  )
}

export function LinkedInLink({ username }) {
  return (
    <span
      className={styles.LinkedIn}
    >
      <Anchor
        href={`https://linkedin.com/in/${username}`}
        isExternal
      >
        <LinkedInIcon />
      </Anchor>
    </span>
  )
}