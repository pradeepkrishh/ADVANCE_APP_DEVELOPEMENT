import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, password }));
    if (isFormValid()) {
      // Mock authentication logic (without backend connection)
      if (name === 'testuser' && password === 'testpassword') {
        // Mock successful login
        navigate('/UserHome');
        // Reset form values
        setName('');
        setPassword('');
      } else {
        // Mock unsuccessful login
        alert('Invalid credentials. Please try again.');
      }
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Email is required';
    } else if (values.password.trim() === '') {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const isFormValid = () => {
    const isValid = Object.keys(errors).length === 0;
    setIsSubmit(isValid);
    return isValid;
  };

  return (
    <div className='container'>
      <div className='login'>
        <center>
          <form className='login_form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='gogo'>
              <div className='form-floating mb-3'>
                <label htmlFor='nm'>Email</label>
                <br></br>
                <input
                  type='email'
                  className='form-control'
                  placeholder='abc@gmail.com'
                  value={name}
                  id='nm'
                  onChange={handleName}
                  style={{backgroundColor:"white",color:"black"}}
                />
              </div>
              {errors.name && <span>{errors.name}</span>}
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
                    id='pwd'
                    value={password}
                    onChange={handlePassword} style={{backgroundColor:"white",color:"black"}}
                  />
                </div>
              </div>
              {errors.password && <span>{errors.password}</span>}
            </div>

            
              <button className='btn btn-secondary' style={{ background: 'black', color: 'white', width: 180, height: 50 }}>
              <Link to='/home'> LOG IN</Link>
              </button>
            

            <h2 className='h2'>
              Don't have an account? <a href='/signup'>SignUp</a>
            </h2>
          </form>
        </center>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default SignUp;
