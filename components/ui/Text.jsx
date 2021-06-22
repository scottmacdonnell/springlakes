import Link from 'next/link'

import styles from '../../styles/components/ui/Text.module.scss'

export const Heading1 = (props) => {
  return ( 
    <h1 className={`${styles.Heading1} ${props.BaronNeue ? styles.BaronNeue : ''}`} {...props} />
  )
}

export const Heading2 = (props) => {
  return ( 
    <h2 className={`${styles.Heading2} ${props.BaronNeue ? styles.BaronNeue : ''}`} {...props} />
  )
}

export const Heading3 = (props) => {
  return ( 
    <h3 className={`${styles.Heading3} ${props.BaronNeue ? styles.BaronNeue : ''}`} {...props} />
  )
}

export const Heading4 = (props) => {
  return ( 
    <h4 className={`${styles.Heading4} ${props.BaronNeue ? styles.BaronNeue : ''}`} {...props} />
  )
}

export const Heading5 = (props) => {
  return ( 
    <h5 className={`${styles.Heading5} ${props.BaronNeue ? styles.BaronNeue : ''}`} {...props} />
  )
}

export const Heading6 = (props) => {
  return ( 
    <h6 className={`${styles.Heading6} ${props.BaronNeue ? styles.BaronNeue : ''}`} {...props} />
  )
}

export const SHeading = (props) => {
  return ( 
    <span className={`${styles.SHeading} ${props.BaronNeue ? styles.BaronNeue : ''}`} {...props} />
  )
}

export const Small = (props) => {
  return ( 
    <small className={styles.Small} {...props} />
  )
}

export const Paragraph = (props) => {
  return ( 
    <p className={styles.Paragraph} {...props} />
  )
}

export const Anchor = ({ 
  children,
  href = '#',
  isExternal = false,
  style
}) => {
  return isExternal ? (
    <Link href={href}>
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.Anchor}
        style={style}
      >
        {children}
      </a>
    </Link>
  ) : (
    <Link href={href}>
      <a
        className={styles.Anchor}
        style={style}
      >
        {children}
      </a>
    </Link>
  )
}

export const Blockquote = (props) => {
  return (
    <blockquote className={styles.Blockquote} {...props} />
  )
}

export const ListTitle = (props) => {
  return <span className={styles.ListTitle}><strong {...props} /></span>
}

export const ListItem = ({
  children,
  href,
  isExternal = false
}) => {
  return (
    <li className={styles.ListItem}>
      { href ? (
          <Anchor
          href={href}
          isExternal={isExternal}
          >
            <span>{children}</span>
          </Anchor>
        ) : <span>{children}</span>
      }
    </li>
  )
}

export const UList = (props) => {
  return (
    <ul className={styles.UList} {...props} />
  )
}