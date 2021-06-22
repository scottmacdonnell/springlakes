import styles from '../../styles/components/ui/Modal.module.scss'
import { useModalState } from '../../lib/useModalState'

export default function Modal({
  children,
  content
}) {
  const { isOpen, onToggle } = useModalState()

  const handleClick = () => {
    onToggle()
  }

  return (
    <>
      <div type="button" onClick={handleClick} className={styles.ModalButton}>{children}</div>
      <div className={`${isOpen ? styles.ModalActive : styles.Modal}`}>
        <div className={styles.ModalOverlay} />

        <div className={styles.ModalWrapper}>
          <div className={styles.ModalFocusTrapWrapper}>
            <div className={styles.ModalFocusTrap}>
              <div className={styles.ModalToggle} onClick={handleClick}>

                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                  <path d="M18 6L6 18"/>
                  <path d="M6 6l12 12"/>
                </svg>
              </div>
              <div className={styles.ModalBody}>
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}