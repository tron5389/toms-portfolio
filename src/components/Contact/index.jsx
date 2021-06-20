import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.734432627128!2d-84.36138798479243!3d33.76752778068432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504035a23f4d9%3A0x546a5c321f2550d8!2s821%20Ralph%20McGill%20Blvd%20NE%2C%20Atlanta%2C%20GA%2030306!5e0!3m2!1sen!2sus!4v1624213879048!5m2!1sen!2sus"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>(205)568-3514</p>

      <h4>Email</h4>
      <p>tron5389@gmail.com</p>

      <h4>Address</h4>
      <p>821 Ralph McGill Blvd NE</p>
      <p>Atlanta, Georgia 30306</p>
    </div>
  );
};

export default Contact;