------------------------------------
Form Backup Before Removing Duplicate Inputs 3/2/2021
------------------------------------

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
  const [message, setMessage] = useState("");
  
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
          <h1 class="content-head is-center">Contact Us!</h1>
          <aside>
               <p>
                   We would <em>love</em> to hear from you! </p>
                   <p>Please use the <b><em>Contact Form </em></b>
                   to send us a message.
               </p>
          </aside>

          <form class="gform pure-form pure-form-stacked" id="form"
          ref={(el) => myFormRef = el}
          onSubmit={handleSubmit}
          >

            <div class="form-elements" className={stylesC.formElContainer}>
              <fieldset class="pure-group" className="fieldset">
                {/*<label htmlFor="name">Name: </label>*/}
                <input type="text" id="name" name="name" required placeholder="Name *" onChange={(e)=>setName(e.target.value)} ref={(el) => myNameRef = el}/>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                <label className={stylesC.compLabel}>
                <span className={stylesC.floatingLabel} style={name=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="name">Name *</span>
                <input className={stylesC.compInput} style={{border: name==""? null :'1px solid #4039a8'}} type="text" id="name" name="name" required onChange={(e)=>setName(e.target.value)} ref={(el) => myNameRef = el}/>
                </label>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                {/*<label htmlFor="name">Name: </label>*/}
                <input type="text" id="Business Name" name="Business Name" required placeholder="Business Name *" onChange={(e)=>setBusinessName(e.target.value)} ref={(el) => myBusinessNameRef = el}/>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                <label className={stylesC.compLabel}>
                <span className={stylesC.floatingLabel} style={businessName=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="Business">Business Name *</span>
                <input className={stylesC.compInput} style={{border: businessName==""? null :'1px solid #4039a8'}} type="text" id="business" name="business" required onChange={(e)=>setBusinessName(e.target.value)} ref={(el) => myBusinessNameRef = el}/>
                </label>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                {/*<label htmlFor="email"><em>Your</em> Email Address:</label>*/}
                <input id="email" name="email" type="email"
                required placeholder="Email Address *"
                onChange={(e)=>setEmail(e.target.value)}
                ref={(el) => myEmailRef = el}/>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                <label className={stylesC.compLabel}>
                <span className={stylesC.floatingLabel} style={email=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="email">Email *</span>
                <input className={stylesC.compInput} style={{border: email==""? null :'1px solid #4039a8'}} type="email" id="email" name="email" required onChange={(e)=>setemail(e.target.value)} ref={(el) => myEmailRef = el}/>
                </label>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                {/*<label htmlFor="nusinessName"><em>Business</em> Name: </label>*/}
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} ref={(el) => myPhoneRef = el}/>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                <label className={stylesC.compLabel}>
                <span className={stylesC.floatingLabel} style={phone=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="phone">Phone *</span>
                <input className={stylesC.compInput} style={{border: phone==""? null :'1px solid #4039a8'}} type="phone" id="phone" name="phone" required onChange={(e)=>setPhone(e.target.value)} ref={(el) => myPhoneRef = el}/>
                </label>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                {/*<label htmlFor="subject">Subject: </label>*/}
                <select name="subject" class="" id="subject" required
                  onChange={(e)=>setSubject(e.target.value)}
                  ref={(el) => mySubjectRef}>
                  <option value="" selected disabled="disabled">Select Subject *</option>
                  <option value="Question">Question</option>
                  <option value="I would like a website.">I would like a website</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </fieldset>

              <fieldset className={stylesC.compFieldsetSel} class="pure-group" className="fieldsets">
                {/*<label htmlFor="subject">Subject: </label>*/}
                {/*<div className={stylesC.selectContainer}>*/}
                <label className={stylesC.compLabelSel}>
                <span className={stylesC.floatingLabelSel} style={subject=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="subject">Subject *</span>
                <select className={stylesC.compInputSel} name="subject" class="" id="subject" required
                  onChange={(e)=>setSubject(e.target.value)}
                  ref={(el) => mySubjectRef} style={{width: '33vw'}}>
                  <option value="" selected hidden disabled="disabled">Please Select</option>
                  <option value="Question">Question</option>
                  <option value="I would like a website.">I would like a website</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
                </label>
                {/*</div>*/}
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                {/*<label htmlFor="message">Message: </label>*/}
                <textarea id="message" name="message" rows="10"
                placeholder="Your message here!"
                onChange={(e)=>setMessage(e.target.value)}
                ref={(el) => myMessageRef = el}></textarea>
              </fieldset>

              <fieldset class="pure-group" className="fieldset">
                <label className={stylesC.compLabelText}>
                <span className={stylesC.floatingLabel} style={message=="" ? {} : {transform: 'scale(0.85) translate3d(-8%,-16%,0)', color: 'black'} } htmlFor="message">Message</span>
                <textarea className={stylesC.compInputText} style={{border: message==""? null :'1px solid #4039a8'}} id="message" name="messsage" rows="10"  onChange={(e)=>setMessage(e.target.value)} ref={(el) => myMessageRef = el}/>
                </label>
              </fieldset>

              <fieldset class="pure-group honeypot-field" style={{display:"none"}} className="fieldset">
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

          <p>* Required Field</p>

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
--------------------------------------
CSS

/* CONTACT */
.section1Container {
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  height: 100%;
}

.contactContainer {
  display: flex;
  flex-direction: column;
  width: 33vw;
  padding: 10px;
  border: #4039a8 solid 2px;
  border-radius: 12px;
  box-shadow: 5px 5px 5px rgba(64, 57, 168, 0.7);
}

.contactContainer h1 {
  /*font-size: 48px;*/
  text-align: center;
  padding-bottom: 10px;
}

.contactContainer aside p {
  font-size: 16px;
}

.contactContainer aside {
  padding-bottom: 10px;
}

.contactContainer fieldset {
  border: 0px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px 0px 14px 0px;
}

.formElContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.compLabel {
  position: relative;
  height: 52px;
  color: #767676;
}

.compInput {
  position: absolute;
  padding: 0;
  bottom: 0;
  width: 31.2vw;
  border: 1px solid #cdc7c2;
  padding: 6px 8px;
  border-radius: 5px;
}

.compInput:hover {
  border: 1px solid #4039a8;
  box-shadow: 0 0 5px rgba(64, 57, 168, 0.7);
}

.compInput:focus {
  border: 1px solid #4039a8;
  box-shadow: 0 0 5px rgba(64, 57, 168, 0.7);
}

.floatingLabel {
  position: absolute;
  z-index: 1;
  transform: translate3d(0.5em,calc(1.5em + 2px),0);
}

.compLabel:hover .floatingLabel {
  color: black;
  transform: scale(0.85) translate3d(-8%,-16%,0);
  transition: 0.2s ease;
}





.compLabelText {
  position: relative;
  height: 197px;
  color: #767676;
}

.compLabelText:hover .floatingLabel {
  color: black;
  transform: scale(0.85) translate3d(-8%,-16%,0);
  transition: 0.2s ease;
}

.compInputText {
  position: absolute;
  padding: 0;
  bottom: 0;
  width: 31.2vw;
  border: 1px solid #cdc7c2;
  padding: 6px 8px;
  border-radius: 5px;
}

.compInputText:hover {
  border: 1px solid #4039a8;
  box-shadow: 0 0 5px rgba(64, 57, 168, 0.7);
}

.compInputText:focus {
  border: 1px solid #4039a8;
  box-shadow: 0 0 5px rgba(64, 57, 168, 0.7);
}

.compLabelText:hover .floatingLabel {
  color: black;
  transform: scale(0.85) translate3d(-8%,-16%,0);
  transition: 0.2s ease;
}


.compLabelSel {
  position: relative;
  height: 52px;
  color: #767676;
  /*padding-bottom: 31px;*/
}

.compInputSel {
  position: absolute;
  /*padding: 0;*/
  bottom: 0;
  height: 33px;
  font: inherit;
  font-size: 14px;

  appearance: none;
  border: 1px solid #cdc7c2;
  border-radius: 5px;
  background: #ffffff;

  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-position: right center;

  padding-left: 3px
  /*border: 1px solid #cdc7c2;*/
  /*padding: 6px 8px;*/
  /*border-radius: 5px;*/
}

.compInputSel:hover {
  border: 1px solid #4039a8;
  box-shadow: 0 0 5px rgba(64, 57, 168, 0.7);
}

.compInputSel:focus {
  border: 1px solid #4039a8;
  box-shadow: 0 0 5px rgba(64, 57, 168, 0.7);
}

.floatingLabelSel {
  position: absolute;
  z-index: 1;
  transform: translate3d(0.5em,calc(1.5em + 2px),0);
  background: #ffffff;
  width: 100px;
}

.compLabelSel:hover .floatingLabelSel{
  color: black;
  transform: scale(0.85) translate3d(-8%,-16%,0);
  transition: 0.2s ease;
  background: none;
}

.contactContainer p {
  font-size: 12px;
  padding-bottom: 3px;
}

.sendButton1 {
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
}

.sendButton1:hover {
  color: #4039a8
}

.iconDefault1 {
  display: block;
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  padding: 0px 3px 0px 0px;
  margin: 0px;
}

.pathDefault {
  display: block;
}

.pathHover {
  display: none;
}

.sendButton1:hover .pathDefault {
  display: none;
}

.sendButton1:hover .pathHover {
  display: block;
}

.iconDefault {
  display: block;
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  padding: 0px 3px 0px 0px;
  margin: 0px;
}

.sendButton:hover .iconDefault {
  display: none;
}

.iconHover {
  display: none;
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  padding: 0px 3px 0px 0px;
  margin: 0;
}

.sendButton:hover .iconHover {
  display: block;
}



------------------------------------------------------------------------

<h2 class="content-head is-center">Contact Us!</h2>
  <aside>
       <p>
           We would <em>love</em> to hear from you! </p>
           <p>Please use the <b><em>Contact Form</em></b>
           to send us a message.
       </p>
   </aside>

<!-- START HERE -->
   <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
   <!-- Style The Contact Form How Ever You Prefer -->
   <link rel="stylesheet" href="style.css">

  <form class="gform pure-form pure-form-stacked" method="POST" data-email="example@email.net"
  action="https://script.google.com/macros/s/AKfycbwMxYDrufp73bKdU8gMvxFDdHRuzcR4IKQUB33B7GqwyfyZS04/exec">
    <!-- change the form action to your script url -->

    <div class="form-elements">
      <fieldset class="pure-group">
        <label for="name">Name: </label>
        <input id="name" name="name" placeholder="What your Mom calls you" />
      </fieldset>

      <fieldset class="pure-group">
        <label for="message">Message: </label>
        <textarea id="message" name="message" rows="10"
        placeholder="Tell us what's on your mind..."></textarea>
      </fieldset>

      <fieldset class="pure-group">
        <label for="email"><em>Your</em> Email Address:</label>
        <input id="email" name="email" type="email" value=""
        required placeholder="your.name@email.com"/>
      </fieldset>

      <fieldset class="pure-group">
        <label for="color">Favourite Color: </label>
        <input id="color" name="color" placeholder="green" />
      </fieldset>

      <fieldset class="pure-group honeypot-field">
        <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
        <input id="honeypot" type="text" name="honeypot" value="" />
      </fieldset>

      <button class="button-success pure-button button-xlarge">
        <i class="fa fa-paper-plane"></i>&nbsp;Send</button>
    </div>

    <!-- Customise the Thankyou Message People See when they submit the form: -->
    <div class="thankyou_message" style="display:none;">
      <h2><em>Thanks</em> for contacting us!
        We will get back to you soon!</h2>
    </div>

  </form>

  <!-- Submit the Form to Google Using "AJAX" -->
  <script data-cfasync="false" src="form-submission-handler.js"></script>
<!-- END -->




------------------------------------
Original Mailchimp Form
------------------------------------





      <!-- Begin Mailchimp Signup Form -->
      <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/>
      <style type="text/css">
        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
      </style>
      <div id="mc_embed_signup">
        <form action="https://gmail.us7.list-manage.com/subscribe/post?u=aa60669514320b4552bcd983a&amp;id=af511131bb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group">
              <label for="mce-FNAME">First Name </label>
              <input type="text" value="" name="FNAME" class="" id="mce-FNAME"/>
            </div>
        <div class="mc-field-group">
          <label for="mce-LNAME">Last Name </label>
          <input type="text" value="" name="LNAME" class="" id="mce-LNAME"/>
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
        </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
        </div>
        <div class="mc-field-group">
          <label for="mce-MMERGE3">Subject </label>
          <select name="MMERGE3" class="" id="mce-MMERGE3">
          <option value=""></option>
          <option value="I would like a website.">I would like a website.</option>
        <option value="Feedback">Feedback</option>
        <option value="Other">Other</option>

          </select>
        </div>
        <div class="mc-field-group">
          <label for="mce-MMERGE4">Body </label>
          <input type="text" value="" name="MMERGE4" class="" id="mce-MMERGE4"/>
        </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_aa60669514320b4552bcd983a_af511131bb" tabindex="-1" value=""/>
            </div>
            <div class="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
            </div>
            </div>
        </form>
      </div>
      <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='MMERGE3';ftypes[3]='dropdown';fnames[4]='MMERGE4';ftypes[4]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
      <!--End mc_embed_signup-->


------------------------------------
Edited for JSX SYNTAX
------------------------------------



      <div id="mc_embed_signup">
        <form>
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group">
              <label for="mce-FNAME">First Name </label>
              <input type="text" value="" name="FNAME" class="" id="mce-FNAME"/>
            </div>
        <div class="mc-field-group">
          <label for="mce-LNAME">Last Name </label>
          <input type="text" value="" name="LNAME" class="" id="mce-LNAME"/>
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
        </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
        </div>
        <div class="mc-field-group">
          <label for="mce-MMERGE3">Subject </label>
          <select name="MMERGE3" class="" id="mce-MMERGE3">
          <option value=""></option>
          <option value="I would like a website.">I would like a website</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>

          </select>
        </div>
        <div class="mc-field-group">
          <label for="mce-MMERGE4">Body </label>
          <input type="text" value="" name="MMERGE4" class="" id="mce-MMERGE4"/>
        </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style={{display: "none"}}></div>
            <div class="response" id="mce-success-response" style={{display: "none"}}></div>
          </div>
            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
              <input type="text" name="b_aa60669514320b4552bcd983a_af511131bb" tabindex="-1" value=""/>
            </div>
            <div class="clear">
            </div>
            </div>
        </form>
      </div>