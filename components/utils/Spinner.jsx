import styles from '../../styles/components/utils/Spinner.module.scss'

export default function Spinner(props) {
  const style = {
    border: `2px rgba(${!props.color ? '0, 0, 0' : props.color}, 0.25) solid`,
    borderTop: `2px rgba(${!props.color ? '0, 0, 0' : props.color}, 1) solid`
  }

  return (
    <div className={styles.SpinnerContainer}>
      <div className={styles.Spinner} style={style} />
    </div>
  )
}