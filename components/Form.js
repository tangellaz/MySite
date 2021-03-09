import React, { useState, useEffect } from 'react';
import styles from '../styles/home.module.css'

const Form = () => {
  let myFormRef;
  let myNameRef;
  let mySubjectRef;
  let myMessageRef;
  let myEmailRef;
  let myHoneypotRef;

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [hoverFlag, setHoverFlag] = useState(false);

    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //       form.reset();
    //       var formElements = form.querySelector(".form-elements")
    //       if (formElements) {
    //         formElements.style.display = "none"; // hide form
    //       }
    //       var thankYouMessage = form.querySelector(".thankyou_message");
    //       if (thankYouMessage) {
    //         thankYouMessage.style.display = "block";
    //       }
    //     }
    // };
    // url encode form data for sending as post data
  useEffect(
    () => {
      myFormRef.reset();
    }
  , [])

  const handleSubmit = async event => {
    event.preventDefault();

    if (honeypot != "") {
      return false;
    }

    const fields = ["name", "subject", "message", "email"]
    const data = {
          name: name,
          subject: subject,
          message: message,
          email: email,

          formDataNameOrder: JSON.stringify(fields),
          formGoogleSheetName: "responses",
          formGoogleSendEmail: ""
    }

    const encodedData = Object.keys(data)
      .map(k => (encodeURIComponent(k) + "=" + encodeURIComponent(data[k])))
      .join('&');

// CORS preflight is not available for POST requests when Content-Type is application/x-www-form-urlencoded
// https://security.stackexchange.com/questions/187311/why-cors-preflight-is-not-available-for-post-requests-when-content-type-is-appli
    const res = fetch (
      'https://script.google.com/macros/s/AKfycbxT1I9HS2PVjAVM6wlGG1bDhROXSDifsm7mI-x0qH9U_rgwSQ0tbWTeAA/exec',
      { 
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:encodedData
      })
      .catch(error => console.log(error))

    myFormRef.reset();
  }

  return(
      <form class="gform pure-form pure-form-stacked" id="form"
      ref={(el) => myFormRef = el}
      onSubmit={handleSubmit}
      >

        <div class="form-elements" className={styles.formElContainer}>
          <fieldset class="pure-group" className="fieldset">
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" required placeholder="What your Mom calls you" onChange={(e)=>setName(e.target.value)} ref={(el) => myNameRef = el}/>
          </fieldset>

          <fieldset class="pure-group" className="fieldset">
            <label htmlFor="email"><em>Your</em> Email Address:</label>
            <input id="email" name="email" type="email"
            required placeholder="your.name@email.com"
            onChange={(e)=>setEmail(e.target.value)}
            ref={(el) => myEmailRef = el}/>
          </fieldset>

          <fieldset class="pure-group" className="fieldset">
            <label htmlFor="subject">Subject: </label>
            <select name="subject" class="" id="subject" required
              onChange={(e)=>setSubject(e.target.value)}
              ref={(el) => mySubjectRef}>
              <option></option>
              <option value="Question">Question</option>
              <option value="I would like a website.">I would like a website</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>

          <fieldset class="pure-group" className="fieldset">
            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" rows="10"
            placeholder="Tell us what's on your mind..."
            onChange={(e)=>setMessage(e.target.value)}
            ref={(el) => myMessageRef = el}></textarea>
          </fieldset>

          <fieldset class="pure-group honeypot-field" style={{display:"none"}} className="fieldset">
            <label htmlFor="honeypot"></label>
            <input id="honeypot" type="text" name="honeypot"
            onChange={(e)=>setHoneypot(e.target.value)}
            ref={(el) => myHoneypotRef = el}/>
          </fieldset>

          <button class="button-success pure-button button-xlarge" type="submit" className={styles.sendButton}>
            <svg class="icon icon-paper-plane, send" className={styles.iconDefault} width="20px" height="20px" viewBox="0 0 28 28">
            {/*<g>*/}
            <path d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-8.234-3.359-4.656 5.109c-0.187 0.219-0.453 0.328-0.734 0.328-0.125 0-0.25-0.016-0.359-0.063-0.391-0.156-0.641-0.531-0.641-0.938v-7.063l-7.375-3.016c-0.359-0.141-0.594-0.469-0.625-0.859-0.031-0.375 0.172-0.734 0.5-0.922l26-15c0.328-0.203 0.75-0.187 1.062 0.031zM22.219 23.594l3.453-20.672-22.406 12.922 5.25 2.141 13.484-9.984-7.469 12.453z"></path>
            {/*</g>*/}
            </svg>

            <svg class="icon icon-paper-plane, send" className={styles.iconHover} width="20px" height="20px" viewBox="0 0 28 28">
            {/*<g>*/}
            <path d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z"></path>
            {/*</g>*/}
            </svg>
            Send</button>

          <button class="button-success pure-button button-xlarge" type="submit" className={styles.sendButton1}>
            <svg class="icon icon-paper-plane, send" className={styles.iconDefault1} width="20px" height="20px" viewBox="0 0 28 28">
            {/*<g>*/}
            <path className={styles.pathDefault} d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-8.234-3.359-4.656 5.109c-0.187 0.219-0.453 0.328-0.734 0.328-0.125 0-0.25-0.016-0.359-0.063-0.391-0.156-0.641-0.531-0.641-0.938v-7.063l-7.375-3.016c-0.359-0.141-0.594-0.469-0.625-0.859-0.031-0.375 0.172-0.734 0.5-0.922l26-15c0.328-0.203 0.75-0.187 1.062 0.031zM22.219 23.594l3.453-20.672-22.406 12.922 5.25 2.141 13.484-9.984-7.469 12.453z"></path>
            <path className={styles.pathHover} d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z"></path>
            {/*</g>*/}
            </svg>
            Send</button>
            
        </div>

        <div class="thankyou_message" style={{display:"none"}}>
          <h2><em>Thanks</em> For contacting us!
            We will get back to you soon!</h2>
        </div>

      </form>
)
}
export default Form