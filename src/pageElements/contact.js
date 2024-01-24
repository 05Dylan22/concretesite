import {useRef, useState} from "react"
import ReCAPTCHA from "react-google-recaptcha"
import React from "react"

const Contact = () => {

  const firstName = useRef(null)
  const email = useRef(null)
  const phoneNumber = useRef(null)
  const optionInput = useRef(null)
  const inquiry = useRef(null)
  const recaptchaRef = React.createRef()

  const [isVerified, setIsVerified] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(null)
  const [isWaiting, setIsWaiting] = useState(false)
  const [formSent, setFormSent] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()

    let formData = {
      firstName: firstName.current.value,
      email: email.current.value,
      phoneNumber: phoneNumber.current.value,
      optionInput: optionInput.current.value,
      inquiry: inquiry.current.value
    }

    setIsWaiting(true)

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(res => {
        if (res == "success") {
          firstName.current.value = ""
          email.current.value = ""
          phoneNumber.current.value = ""
          optionInput.current.value = ""
          inquiry.current.value = ""
          setIsVerified(false)
          setIsWaiting(false)
          setIsSuccessful(true)
          setFormSent(true)
          setTimeout(() => {
            setFormSent(false)
          }, 1500)
        }
      })
      .catch((err) => {
        setIsWaiting(false)
        setIsSuccessful(false)
        setFormSent(true)
        console.log(err)
      })
  }

  const recaptchaChange = (value) => {
    setIsVerified(true)
  }

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <div className="top-form">
        <input placeholder="Name:" ref={firstName} type="text" required/>
        <input placeholder="Email:" ref={email} type="email" required/>
        <input placeholder="Phone Number:" ref={phoneNumber} type="text" required/>
        <select ref={optionInput} className="contact-option" defaultValue={"Choose A Service"} id="options">
          <option value="Choose A Service">Choose A Service...</option>
          <option value="Concrete Repair">Concrete Repair</option>
          <option value="Concrete Slabs">Concrete Slabs</option>
          <option value="Concrete Restoration & Repair">Concrete Restoration & Repair</option>
          <option value="Concrete Removal">Concrete Removal</option>
        </select>        
      </div>
      <div className="form-details">
        <textarea className="form-textarea" placeholder="Details..." ref={inquiry} cols="60" rows="10" ></textarea>
      </div>
      <div className="bottom-form">
        <ReCAPTCHA ref={recaptchaRef} onChange={recaptchaChange} sitekey="6Lcq2WMnAAAAAJy3GujCLIjPIcN_YgF-0zbZaRH9" style={{transform:"scale(0.85)", transformOrigin:"0 0"}}/>
        {isWaiting ? <button disabled="true" className="form-submit">Sending...</button> : !formSent ? <button disabled={!isVerified} className="form-submit" type="submit">Submit</button> : isSuccessful ? <button disabled="true" className="form-success">Success</button> : <button disabled="true" className="form-failure">Failed</button>}
      </div>
    </form>
  )
}

export default Contact