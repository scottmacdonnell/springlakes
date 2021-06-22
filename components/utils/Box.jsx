import MediaQuery from 'react-responsive'

import Container from './Container'

import styles from '../../styles/components/utils/Box.module.scss'

const breakpoints = {
  min: '414px',
  small: '596px',
  medium: '768px',
  large: '992px',
  desktop: '1080px',
  max: '1112px'
}

export default function Box(props) {
  return (
    <div className={styles.BoxWrapper}>
      <Container {...props} />
    </div>
  )
}

export function BoxFlex({
  children,
  direction = 'row',
  justify = 'center',
  align = 'center',
  style = { height: '100%' },
  desktopStyle = {},
  mobileStyle = {},
}) {
  const mobileFlexStyles = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
  }

  const desktopFlexStyles = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
  }

  for(let key in style) {
    mobileFlexStyles[key] = style[key]
    desktopFlexStyles[key] = style[key]
  }

  for(let key in mobileStyle) {
    mobileFlexStyles[key] = mobileStyle[key]
  }

  for(let key in desktopStyle) {
    desktopFlexStyles[key] = desktopStyle[key]
  }

  return (
    <>
      <MediaQuery minWidth={breakpoints.medium}>
        <div className={styles.BoxFlex} style={desktopFlexStyles} children={children} />
      </MediaQuery>

      <MediaQuery maxWidth={breakpoints.medium}>
        <div className={styles.BoxFlex} style={mobileFlexStyles} children={children} />
      </MediaQuery>
    </>
  )
}

export function BoxGrid({
  children,
  style,
  desktopStyle,
  mobileStyle,
  desktopColumns = '1fr',
  mobileColumns = '1fr',
  desktopRows = '1fr',
  mobileRows = '1fr'
}) {
  const desktopGridStyles = {
    gridTemplateColumns: desktopColumns,
    gridTemplateRows: desktopRows,
  }

  const mobileGridStyles = {
    gridTemplateColumns: mobileColumns,
    gridTemplateRows: mobileRows,
  }

  for(let key in style) {
    desktopGridStyles[key] = style[key]
    mobileGridStyles[key] = style[key]
  }

  for(let key in mobileStyle) {
    mobileGridStyles[key] = mobileStyle[key]
  }

  for(let key in desktopStyle) {
    desktopGridStyles[key] = desktopStyle[key]
  }

  return (
    <>
      <MediaQuery minWidth={breakpoints.medium}>
        <div className={styles.BoxGrid} style={desktopGridStyles} children={children} />
      </MediaQuery>

      <MediaQuery maxWidth={breakpoints.medium}>
        <div className={styles.BoxGrid} style={mobileGridStyles} children={children} />
      </MediaQuery>
    </>
  )
}