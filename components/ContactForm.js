import classes from "@/styles/contact-form.module.css";
import { useRef, useState, useEffect } from "react";
import Notification from "./Notification";

function ContactForm() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const [requestStatus, setRequestStatus] = useState(); // pending / success / error
  const [requestError, setError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendContactData() {
    const body = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    const res = await fetch("api/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(res.message || "Something went wrong");
    }
  }

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");
    try {
      await sendContactData();
      setRequestStatus("success");
      event.target.reset();
    } catch (err) {
      setError(err);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "sucecss",
      title: "Success!",
      message: "Your message was sent successfully",
    };
  }
  if (requestStatus === "error") {
    setError();
    notification = {
      status: "error",
      title: "Something went wrong",
      message: requestError,
    };
  }

  return (
    <>
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required ref={nameRef} />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <input
              type="textarea"
              id="message"
              row="5"
              required
              ref={messageRef}
            />
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>
        <section>
          <h3>Sources</h3>
          <ul>
            <li>
              <a href="https://nextjs.org/docs" target="_blank">
                Next.js.org
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/nextjs-react-the-complete-guide"
                target="_blank"
              >
                Udemy - Next.js React The Complete Guide
              </a>
            </li>
            <li>
              <a href="https://unsplash.com/" target="_blank">
                Images - Unsplash.com
              </a>
            </li>
          </ul>
        </section>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </section>
    </>
  );
}

export default ContactForm;
