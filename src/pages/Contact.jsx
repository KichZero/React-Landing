import React from "react";
import "../Style/Contact.css";

const Contact = () => {


  
  return (
    <div className="contactBlock">
      <div class="sectionHeader">
        <h2 class="section__title">Contact US</h2>
        <div class="sectionText">
          <p className="pText">
            Please don’t hesitate to say hello - whether it’s an enquiry about
            our services to questions about ItdealGroup. No query is too big or
            small and our specialised team are here to help.
          </p>
          
          <img className="lottie" src="https://i.pinimg.com/originals/5c/8f/08/5c8f08b5fe55e12baae6fc54e46c343a.gif" alt="" />
      
          <br />
          <div className="OurContact">
            <p>For Head Office directly contact</p>
          <br />
          <p>Tel: +373 (00) 000000 </p>
          <br />
          <p>Email: pybytes@gmail.com </p>
          <br />
          <p>For technical questions contact</p>
          <br />
          <a href="https://t.me/pybytes" target="_blank" rel="noopener noreferrer" >Telegram: https://t.me/pybytes</a>
          <br />
          </div>
          
        </div>
      </div>

        
{/* form div  */}


      <div class="boxContainer">  
  <form id="contact" action="" method="post">
    <h3>Contact Form</h3>
    <h4>Contact us for create your App</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>



    </div>
  );
};

export default Contact;
