import { useRef, useState, useEffect } from "react"
import classes from "./contact-form.module.css"
import Notification from "../ui/notification"

const sendContactData = async (contactDetailObj) => {
  const response = await fetch("/api/contacts", {
    method: "POST",
    body: JSON.stringify(contactDetailObj),
  })
  console.log(response)
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong")
  }
}

function ContactForm() {
  const [status, setStatus] = useState() //'pending' 'success' ,'error'
  const [requestError, setRequestError] = useState()
  const emailInput = useRef()
  const nameInput = useRef()
  const messageInput = useRef()

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null)
        setRequestError(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const sendMessage = (e) => {
    const newMessage = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      message: messageInput.current.value,
    }
    e.preventDefault()
    // optional extra validation
    setStatus("pending")
    try {
      sendContactData(newMessage)
      setStatus("success")
    } catch (error) {
      setStatus("error")
      setRequestError(error.message)
    }
    emailInput.current.value = ""
    nameInput.current.value = ""
    messageInput.current.value = ""
  }

  let notification

  if (status === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Do not go Back or Refresh",
    }
  }

  if (status === "success") {
    notification = {
      status: "success",
      title: "Message Sent",
      message: "Thank you for your message",
    }
  }
  if (status === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError,
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you</h1>
      <form className={classes.form} onSubmit={sendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              ref={emailInput}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input ref={nameInput} type="text" name="name" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            ref={messageInput}
            name="message"
            id="message"
            rows="5"
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {/* {!isInvalid && <p>Please enter a valid email and name</p>} */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  )
}
export default ContactForm
/* error handling is not working */
