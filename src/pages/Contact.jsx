import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
// import { RingLoader } from "react-spinners";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

// state to handle loading
const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
setLoading(true);
    const serviceID ="service_5ugbe28" ; // Replace with your EmailJS service ID
    const templateID = 'template_474061o'; // Replace with your EmailJS template ID
    const userID = 'OSnB-cL1VT7HQHLyS'; 

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Recipient Name', // Optional: Replace with the recipient's name or leave it static
    };

  //   emailjs.send(serviceID, templateID, templateParams,userID)
  //     .then((response) => {
  //       // console.log('SUCCESS!', response.status, response.text);
  //       if(response.ok){
  //         setLoading(false);
  //         alert('Your message has been sent successfully!');
  //         setFormData({
  //           firstName: "",
  //           lastName: "",
  //           email: "",
  //           message: "",
  //         });
  //       }
       
  //     }, (error) => {
  //       console.error('FAILED...', error);
  //       alert('There was an error submitting your message. Please try again later.');
  //     });
  // };

  emailjs.send(serviceID, templateID, templateParams, userID)
  .then(() => {
    setLoading(false);
    alert('Your message has been sent successfully!');
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  }, (error) => {
    setLoading(false);
    console.error('FAILED...', error);
    alert('There was an error submitting your message. Please try again later.');
  });
};
  return (
    <div className={`contact-container ${loading? "active ":""}`}>
  
      <div className="contact-us-wrapper">
        <div className="contact-us-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">
            Need to get in touch with us? Fill out the form below to send us a message, or check out our websites department pages for contact information specific to a team.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name*
            </label>
            <input
              type="text"
              className="form-input"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-input"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
