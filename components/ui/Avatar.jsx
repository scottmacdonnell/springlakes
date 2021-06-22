import Image from 'next/image'

import styles from '../../styles/components/ui/Avatar.module.scss'

export default function Avatar({
  src,
  width = 32,
  height = 32,
  color
}) {
  return (
    <>
      { src ? (
        <div className={styles.Avatar}>
          <Image
            src={src}
            width={width}
            height={height}
            loading="lazy"
          />
        </div>
      ) : <div className={styles.AvatarDisabled} style={{ width: `${width}px`, height: `${height}px` }} >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div> }
    </>
  )
}