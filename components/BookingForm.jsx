import React, { useState } from 'react'

import Container from './Container'

import InputText from './ui/InputText'
import InputEmail from './ui/InputEmail'
import InputTel from './ui/InputTel'
import InputTextArea from './ui/InputTextArea'
import FormSpacer from './ui/FormSpacer'

import styles from '../styles/components/BookingForm.module.scss'

export default function BookingForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    title: 'Event Booking Inquires',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        title: 'Event Booking Inquires',
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/email/send-event-booking-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <BookingFormComponent>
      <BookingFormHeader>
        <h2>Event Booking Inquires</h2>
      </BookingFormHeader>

      <BookingFormMain>
        <form className={styles.BookingFormContent} onSubmit={handleSubmit}>
          <div>
            <InputText
              name="name"
              placeholder="Name"
              autoComplete="off"
              required
              onChange={handleChange}
            />

            <FormSpacer />

            <InputEmail
              name="email"
              placeholder="Email Address"
              autoComplete="off"
              required
              onChange={handleChange}
            />

            <FormSpacer />

            <InputTel
              name="phone"
              placeholder="Phone Number"
              autoComplete="off"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <InputTextArea
              name="message"
              placeholder="Message"
              autoComplete="off"
              required
              onChange={handleChange}
            />

            <FormSpacer />

            <button type='submit' id='submit' name='submit' disabled={status.submitting}>
              <span className={styles.Prefix}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </span>

              <span className={styles.Content}>
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}
              </span>
            </button>
          </div>
        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success">{status.info.msg}</div>
        )}
      </BookingFormMain>
    </BookingFormComponent>
  )
}

function BookingFormMain(props) {
  return (
    <div className={styles.BookingFormMain}>
      {props.children}
    </div>
  )
}

function BookingFormHeader(props) {
  return (
    <div className={styles.BookingFormHeader}>
      {props.children}
    </div>
  )
}

function BookingFormComponent(props) {
  return (
    <div className={styles.BookingForm}>
      <Container>
        <div className={styles.BookingFormBox}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}