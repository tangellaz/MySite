import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import WindowSize from '../components/WindowSize';
import Navigation from '../components/Navigation';
import NavigationFooter from '../components/NavigationFooter';
import styles from '../styles/home.module.css';
import stylesC from './contact.module.css';



const Contact = () => {
  let myFormRef;
  let myNameRef;
  let myBusinessNameRef;
  let myEmailRef;
  let myPhoneRef;
  let mySubjectRef;
  let myMessageRef;
  let myHoneypotRef;

  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectEvent, setSubjectEvent] = useState(0);
  const [message, setMessage] = useState("");
  
  const [honeypot, setHoneypot] = useState("");

  const [hoverFlag, setHoverFlag] = useState(false);

  const {width, height} = WindowSize();

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

    const fields = ["subject", "message", "name", "business", "email", "phone"]
    const data = {
          subject: subject,
          message: message,
          name: name,
          business: businessName,
          email: email,
          phone: phone,

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
  <div>
    <Head>
      <title>Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/AZWWLogo2Minified.svg"/>
    </Head>
    
    <Navigation/>

    <main>
      <div className={styles.section1}>
        <div className={stylesC.section1Container}>

        <div className={stylesC.contactContainer}>
          <h1>Contact Us!</h1>
          <aside>
               <p>
                   We would <em>love</em> to hear from you! </p>
                   <p>Please use the <b><em>Contact Form </em></b>
                   to send us a message.
               </p>
          </aside>

          <form id="form"
          ref={(el) => myFormRef = el}
          onSubmit={handleSubmit}
          >

            <div className={stylesC.formElContainer}>

              <fieldset className="fieldset">
                <label className={stylesC.compLabel}>
                <span className={stylesC.floatingLabel} style={name=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="name">Name *</span>
                <input className={stylesC.compInput} style={{border: name==""? null :'1px solid #4039a8'}} type="text" id="name" name="name" required onChange={(e)=>setName(e.target.value)} ref={(el) => myNameRef = el}/>
                </label>
              </fieldset>

              <fieldset className="fieldset">
                <label className={stylesC.compLabel}>
                <span className={stylesC.floatingLabel} style={businessName=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="Business">Business Name *</span>
                <input className={stylesC.compInput} style={{border: businessName==""? null :'1px solid #4039a8'}} type="text" id="business" name="business" required onChange={(e)=>setBusinessName(e.target.value)} ref={(el) => myBusinessNameRef = el}/>
                </label>
              </fieldset>

              <fieldset className="fieldset">
                <label className={stylesC.compLabel}>
                <span className={stylesC.floatingLabel} style={email=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="email">Email *</span>
                <input className={stylesC.compInput} style={{border: email==""? null :'1px solid #4039a8'}} type="email" id="email" name="email" required onChange={(e)=>setEmail(e.target.value)} ref={(el) => myEmailRef = el}/>
                </label>
              </fieldset>

              <fieldset className="fieldset">
                <label className={stylesC.compLabel}>
                <span className={stylesC.floatingLabel} style={phone=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="phone">Phone *</span>
                <input className={stylesC.compInput} style={{border: phone==""? null :'1px solid #4039a8'}} type="phone" id="phone" name="phone" required onChange={(e)=>setPhone(e.target.value)} ref={(el) => myPhoneRef = el}/>
                </label>
              </fieldset>

              <fieldset className={stylesC.compFieldsetSel}>
                {/*<label htmlFor="subject">Subject: </label>*/}
                {/*<div className={stylesC.selectContainer}>*/}
                <label className={stylesC.compLabelSel}>
                <span className={stylesC.floatingLabelSel} style={subject==""&&subjectEvent==0 ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black', background: 'none'} } htmlFor="subject">Subject *</span>
                <select className={stylesC.compInputSel} name="subject" id="subject" required
                  onChange={(e)=>setSubject(e.target.value)}
                  ref={(el) => mySubjectRef}
                  value={subject}
                  style={{height:'33px',font:'inherit',fontSize:'14px',padding:'6px 8px',position:'absolute',bottom:'0',appearance:'none',border:'1px solid #cdc7c2',borderRadius:'5px',background:'#ffffff',
                    backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px'%3E%3Cpolygon points='3,7 8,11 13,7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 3px center',
                    border: subject==""&&subjectEvent==0?'1px solid #cdc7c2':'1px solid #4039a8',
                    boxShadow:subjectEvent==1?'0 0 5px rgba(64, 57, 168, 0.7)':'none',
                    width: width>=768?'33vw':'75vw'
                  }}
                  onMouseEnter={subjectEvent==0?(e)=>setSubjectEvent(1):null}
                  onMouseLeave={subjectEvent==1?(e)=>setSubjectEvent(0):null}
                  onFocus={subjectEvent==0?(e)=>setSubjectEvent(1):null}
                  onBlur={subjectEvent==1?(e)=>setSubjectEvent(0):null}
                  >
                  <option value="" defaultValue hidden>Please Select</option>
                  <option value="Question">Question</option>
                  <option value="I would like a website.">I would like a website</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                  {/*<style jsx>{`select:hover {border: 1px solid #4039a8;}`}</style>*/}
                </select>
                </label>
                <style jsx>{`select:focus {border: 1px solid #4039a8;}`}</style>
                {/*</div>*/}
              </fieldset>

              <fieldset className="fieldset">
                <label className={stylesC.compLabelText}>
                <span className={stylesC.floatingLabel} style={message=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="message">Message</span>
                <textarea className={stylesC.compInputText} style={{border: message==""? null :'1px solid #4039a8'}} id="message" name="messsage" rows="10"  onChange={(e)=>setMessage(e.target.value)} ref={(el) => myMessageRef = el}/>
                </label>
              </fieldset>

              <fieldset style={{display:"none"}} className="fieldset">
                <label htmlFor="honeypot"></label>
                <input id="honeypot" type="text" name="honeypot"
                onChange={(e)=>setHoneypot(e.target.value)}
                ref={(el) => myHoneypotRef = el}/>
              </fieldset>
                
            </div>

            <div class="thankyou_message" style={{display:"none"}}>
              <h2><em>Thanks</em> For contacting us!
                We will get back to you soon!</h2>
            </div>

          </form>

          <p className={stylesC.reqField}>* Required Field</p>

          <button className={stylesC.sendButton1} form="form" type="submit" >
            <svg className={stylesC.iconDefault1} width="20px" height="20px" viewBox="0 0 28 28">
            {/*<g>*/}
            <path className={stylesC.pathDefault} d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-8.234-3.359-4.656 5.109c-0.187 0.219-0.453 0.328-0.734 0.328-0.125 0-0.25-0.016-0.359-0.063-0.391-0.156-0.641-0.531-0.641-0.938v-7.063l-7.375-3.016c-0.359-0.141-0.594-0.469-0.625-0.859-0.031-0.375 0.172-0.734 0.5-0.922l26-15c0.328-0.203 0.75-0.187 1.062 0.031zM22.219 23.594l3.453-20.672-22.406 12.922 5.25 2.141 13.484-9.984-7.469 12.453z"></path>
            <path className={stylesC.pathHover} d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z"></path>
            {/*</g>*/}
            </svg>
            Send
          </button>

          </div>
        </div>
      </div>
    </main>
    
    <div className={styles.divider}></div>
    <NavigationFooter/>

  </div>
  )
 }
export default Contact;