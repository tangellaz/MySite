import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import NavigationFooter from '../components/NavigationFooter';
import styles from '../styles/home.module.css';
import StylesContact from '../static/StylesContact';
import React, { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("");
  const [honeypot, setHoneypot] = useState("");

// get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    console.log("0 fields=",fields)
    console.log("0 type(fields)=",typeof(fields))
    formData.formDataNameOrder = JSON.stringify(fields);
    console.log("1 formDataNameOrder=",formData.formDataNameOrder)
    console.log("1 Type(formDataNameOrder)=",typeof(formData.formDataNameOrder))
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;
    console.log('data=',data);
    console.log("2 formDataNameOrder=",data.formDataNameOrder)
    console.log("2 Type(formDataNameOrder)=",typeof(data.formDataNameOrder))

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    // disableAllButtons(form);
    // var url = form.action;
    var url = 'https://script.google.com/macros/s/AKfycbxT1I9HS2PVjAVM6wlGG1bDhROXSDifsm7mI-x0qH9U_rgwSQ0tbWTeAA/exec'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    console.log('encoded=',encoded)
    console.log('encodedType=',typeof(encoded))
    xhr.send(encoded);
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (honeypot != "") {
      return false;
    }

    const fields = ["name", "message", "email", "color"]
    const data = {
          name: name,
          message: message,
          email: email,
          color: color,
          formDataNameOrder: JSON.stringify(fields),
          formGoogleSheetName: "responses",
          formGoogleSendEmail: ""
    }

    console.log("data=",data)

    var encoded = Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    console.log('encoded=',encoded)
    console.log('encodedType=',typeof(encoded))

    const encodedData = Object.keys(data)
      .map(k => (encodeURIComponent(k) + "=" + encodeURIComponent(data[k])))
      .join('&');

    console.log('encodedData=',encodedData)
    console.log('encodedType=',typeof(encodedData))

    console.log('ANSWER =')
    console.log("name=aa&message=a&email=a%40mail.com&color=a&formDataNameOrder=%5B%22name%22%2C%22message%22%2C%22email%22%2C%22color%22%5D&formGoogleSheetName=responses&formGoogleSendEmail=")


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
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
      // const result = await res.json()
  }

//  const handleChange = event => {
// // This triggers everytime the input is changed
//     console.log("name_before= ", name)
//     console.log("EVENT_before=",event.target.value)
//     setName(
//        event.target.value
//     );
//     console.log("EVENT_after=",event.target.value)
//     console.log("name_after= ", name)
//   };

  return(
  <div>
    <Head>
      <title>Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/*<script data-cfasync="false" type="text/javascript" src="../static/form-submission-handler.js"></script>*/}

    </Head>

    <header className={styles.header}>
      <div id="navbar">
        <Navigation/>
      </div>
    </header>

    <main>

      <h2 class="content-head is-center">Contact Us!</h2>
      <aside>
           <p>
               We would <em>love</em> to hear from you! </p>
               <p>Please use the <b><em>Contact Form</em></b>
               to send us a message.
           </p>
      </aside>

      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
      {/*<link rel="stylesheet" href="style.css"/>*/}

      <form class="gform pure-form pure-form-stacked"
      onSubmit={handleSubmit}
      >

        <div class="form-elements">
          <fieldset class="pure-group">
            <label htmlFor="name">Name: </label>
            {/*<input id="name" name="name" placeholder="What your Mom calls you" onChange={(e)=>handleChange(e)}/>*/}
            <input id="name" name="name" placeholder="What your Mom calls you" onChange={(e)=>setName(e.target.value)}/>
          </fieldset>

          <fieldset class="pure-group">
            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" rows="10"
            placeholder="Tell us what's on your mind..."
            onChange={(e)=>setMessage(e.target.value)}></textarea>
          </fieldset>

          <fieldset class="pure-group">
            <label htmlFor="email"><em>Your</em> Email Address:</label>
            <input id="email" name="email" type="email"
            required placeholder="your.name@email.com"
            onChange={(e)=>setEmail(e.target.value)}/>
          </fieldset>

          <fieldset class="pure-group">
            <label htmlFor="color">Favourite Color: </label>
            <input id="color" name="color" placeholder="green" 
            onChange={(e)=>setColor(e.target.value)}/>
          </fieldset>

          <fieldset class="pure-group honeypot-field" style={{display:"none"}}>
            <label htmlFor="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
            <input id="honeypot" type="text" name="honeypot"
            onChange={(e)=>setHoneypot(e.target.value)}/>
          </fieldset>

          <button class="button-success pure-button button-xlarge" type="submit">
            <i class="fa fa-paper-plane"></i>&nbsp;Send</button>
        </div>

        <div class="thankyou_message" style={{display:"none"}}>
          <h2><em>Thanks</em> For contacting us!
            We will get back to you soon!</h2>
        </div>

      </form>

      {/*<script data-cfasync="false" src="../static/form-submission-handler.js"></script>*/}


    </main>
    
    <div className={styles.divider}></div>
    <NavigationFooter/>

  </div>
  )
 }
export default Contact;