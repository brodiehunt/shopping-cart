import {useState, useRef} from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const debounceTimeoutRef = useRef(null);
  
  function debounceValidation(name, val) {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      let error = null;
      if (name === 'name') {
        error = validateName(val);
      }
      if (name === 'email') {
        error = validateEmail(val);
      }
      if (name === 'message') {
        error = validateMessage(val)
      }
      setErrors((prevErrors) => ({...prevErrors, [name]: error}))
    }, 500)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateName(formData.name) || validateEmail(formData.email) || validateMessage(formData.message)) {
      return alert("fill in the form first");
    }
    alert("Thanks for the submission");
  }

  function handleFormChange(event) {
    const {name, value} = event.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
    debounceValidation(name, value);
  }

  function handleBlur(event) {
    const {name, value} = event.target;
    debounceValidation(name, value);
  }

  function validateName(value) {
    if (!value) return "Name is required.";
    if (value.length < 3 || value.length > 20) return "Name should be 3 - 20 characters long";
    return null;
  }

  function validateEmail(value) {
    if (!value) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(value)) return 'Email is invalid';
    return null;
  }

  function validateMessage(value) {
    if (!value) return "Message is required.";
    if (value.length < 3 || value.length > 100) return "Name should be 3 - 100 characters long";
    return null;
  }
  

  return (
    <section className="contact">
      <h1>Get in Touch</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        {errors.name && <div className="error-container">{errors.name}</div>}
        <input 
          className={errors.name ? 'error' : ''}
          onChange={handleFormChange}
          onBlur={handleBlur}
          type="text" 
          name="name" 
          id="name" 
          value={formData.name} 
          placeholder="Your Name"
        />
        
        <label htmlFor="email">Email</label>
        {errors.email && <div className="error-container">{errors.email}</div>}
        <input
          className={errors.email ? 'error' : ''}
          onChange={handleFormChange}
          onBlur={handleBlur}
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="E.g example@gmail.com"
        />
        <label htmlFor="message">Your message</label>
        {errors.message && <div className="error-container">{errors.message}</div>}
        <textarea
          className={errors.message ? 'error' : ''}
          onChange={handleFormChange}
          onBlur={handleBlur}
          name="message"
          id="message"
          value={formData.message}
          placeholder="What do you want to say to us?"
          rows="5"
        />
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact;