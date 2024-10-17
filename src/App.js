import  { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  function submitaction(event) {
    event.preventDefault();

    setNameError('');
    setEmailError('');
    setPhoneError('');

    if (!nameregex.test(name)) {
      setNameError('Name must only contain letters');
    }

    if (!emailregex.test(email)) {
      setEmailError('Provide a valid email address');
    }

    if (!numberegex.test(phone)) {
      setPhoneError('Number must contain only 10 digits');
    }

    if (
      nameregex.test(name) &&
      emailregex.test(email) &&
      numberegex.test(phone)
    ) {
      console.log('Form submitted:', { name, email, phone });
     alert("Form Submitted successfully")
    }
  }

  const nameregex = /^[a-zA-Z]+$/;
  const emailregex = /^[a-zA-Z0-9]+@gmail\.com$/;
  const numberegex = /^\d{10}$/;

  return (
    <div className="container">
      <div className="form-card">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={submitaction}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="error-message">{nameError}</span>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
            <span className="error-message">{emailError}</span>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <span className="error-message">{phoneError}</span>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
