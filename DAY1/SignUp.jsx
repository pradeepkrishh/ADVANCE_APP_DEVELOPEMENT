import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // You can create a separate CSS file for styling

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password, confirmPassword }));
    if (isFormValid()) {
      // Mock registration logic (without backend connection)
      // Here, you can add your logic to send registration data to the server
      alert('Registration successful!'); // Mock success message
      // Reset form values
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (values.confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex (you can use a more comprehensive regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    const isValid = Object.keys(errors).length === 0;
    setIsSubmit(isValid);
    return isValid;
  };

  return (
    <div className='container'>
      <div className='register'>
        <center>
          <form className='register_form' onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='gogo'>
              <div className='form-floating mb-3'>
                <label htmlFor='nm'>Name</label>
                <br></br>
                <input
                  type='text'
                  className='form-control'
                  placeholder='John Doe'
                  value={name}
                  onChange={handleName} style={{backgroundColor:"white",color:"black"}}
                />
              </div>
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div className='gogo'>
              <div className='form-floating mb-3'>
                <label htmlFor='email'>Email</label>
                <br></br>
                <input
                  type='email'
                  className='form-control'
                  placeholder='john.doe@example.com'
                  value={email}
                  onChange={handleEmail} style={{backgroundColor:"white",color:"black"}}
                />
              </div>
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className='loginbox'>
              <div className='jo'>
                <div className='form-floating mb-3'>
                  <label htmlFor='pwd'>Password</label>
                  <br></br>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='password'
                    value={password}
                    onChange={handlePassword} style={{backgroundColor:"white",color:"black"}}
                  />
                </div>
                {errors.password && <span>{errors.password}</span>}
              </div>

              <div className='jo'>
                <div className='form-floating mb-3'>
                  <label htmlFor='confirmPwd'>Confirm Password</label>
                  <br></br>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='confirm password'
                    value={confirmPassword}
                    onChange={handleConfirmPassword} style={{backgroundColor:"white",color:"black"}}
                  />
                </div>
                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
              </div>
            </div>

            <button
              type='submit'
              className='btn btn-secondary'
              style={{ background: 'black', color: 'white', width: 180, height: 50, margin: 40 }}
            >
              Sign Up
            </button>

            <h2 className='h2'>
              Already have an account? <a href='/UserLogin'>Login</a>
            </h2>
          </form>
        </center>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Register;
