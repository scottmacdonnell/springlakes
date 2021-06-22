import { BoxFlex } from '../utils/Box'
import Spinner from '../utils/Spinner'

import styles from '../../styles/components/ui/Form.module.scss'

export default function Form(props) {
  return <form className={styles.Form} {...props} />
}

export const FormWrapper = (props) => {
  return <div className={styles.FormWrapper} {...props} />
}

export const FormHeader = (props) => {
  return <BoxFlex direction="column" justify="center" align="flex-start" style={{ height: '100%' }} {...props} />
}

export function InputText(props) {
  return (
    <input 
      type="text"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      onChange={props.onChange}
      value={props.value}
      className={styles.InputText}
      {...props}
    />
  )
}

export function InputEmail(props) {
  return (
    <input
      type="email"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      // onChange={props.onChange}
      // value={props.value}
      className={styles.InputEmail}
    />
  )
}

export function InputTel(props) {
  return (
    <input 
      type="tel"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      // onChange={props.onChange}
      // value={props.value}
      className={styles.InputTel}
    />
  )
}

export function InputTextArea(props) {
  return (
    <textarea
      type="textarea"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      // onChange={props.onChange}
      // value={props.value}
      className={styles.InputTextArea}
    />
  )
}

export function InputDate(props) {
  return (
    <input 
      type="date"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      // onChange={props.onChange}
      // value={props.value}
      className={styles.InputDate}
    />
  )
}

export function Select(props) {
  return (
    <div className={styles.SelectWrapper}>
      <select 
        id={props.name}
        name={props.name}
        className={styles.Select}
        onChange={props.onChange}
        value={props.value}
        {...props}
      />
      <div className={styles.SelectArrow}>
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  )
}

export function Option(props) {
  return (
    <option 
      id={props.name}
      name={props.name}
      value={props.value}
      className={styles.Option}
      {...props}
    />
  )
}

export function SubmitButton(props) {
  return (
    <button 
      type='submit'
      id='submit'
      name='submit'
      className={`${styles.SubmitButton} ${props?.status?.disabled == true ? `${styles.SubmitButtonDisabled}` : ''} ${props?.status?.submitting == true || props?.status?.submitted == true ? `${styles.SubmitButtonActive}` : false}`}
      // className={`${status.disabled == true ? styles.ButtonDisabled : styles.ButtonActive}`}
      disabled={props?.status?.disabled == true ? true : false}
    >
      {/* <span className={styles.ButtonPrefix}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </span> */}

      {props.prefix ? props.prefix : <span className={styles.ButtonPrefix} />}

      <span className={styles.ButtonContent}>
        { !props?.status?.submitting ? (
            !props?.status?.submitted ? props.children : (
                  <div className={styles.ButtonCheck}>
                    <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                      <polyline points="6.66 12 10.43 16.41 17.32 8.34" />
                    </svg>
                  </div>
            )
          ) : <Spinner color="255, 255, 255" />
        }
      </span>
    </button>
  )
}

export function ButtonPrefix(props) {
  return (
    <span className={styles.ButtonPrefix} {...props} />
  )
}

export function ButtonSuffix(props) {
  return (
    <span className={styles.ButtonSuffix} {...props} />
  )
}

export function Spacer() {
  return <span className={styles.Spacer} />
}