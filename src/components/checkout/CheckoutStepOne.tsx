import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

const CheckoutStepOne = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    postalCode: false,
  });

  const navigate = useNavigate();

  const handleError = () => {
    let hasError = false;

    if (firstName.trim().length === 0) {
      setError('Error: First Name is required');
      setErrors((prev) => ({ ...prev, firstName: true }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, firstName: false }));
    }

    if (lastName.trim().length === 0) {
      setError('Error: Last Name is required');
      setErrors((prev) => ({ ...prev, lastName: true }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, lastName: false }));
    }

    if (postalCode.trim().length === 0) {
      setError('Error: Postal Code is required');
      setErrors((prev) => ({ ...prev, postalCode: true }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, postalCode: false }));
    }

    if (!hasError) {
      setError('');
      navigate('/checkout-step-two')

    }
  };

  const handleFirstNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    if (e.target.value.trim().length > 0) {
      setErrors((prev) => ({ ...prev, firstName: false }));
    }
  };

  const handleLastNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    if (e.target.value.trim().length > 0) {
      setErrors((prev) => ({ ...prev, lastName: false }));
    }
  };

  const handlePostalCodeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.target.value);
    if (e.target.value.trim().length > 0) {
      setErrors((prev) => ({ ...prev, postalCode: false }));
    }
  };

  const resetForm = () => {
        setFirstName('');
        setLastName('');
        setPostalCode('');
        setError('');
        setErrors({
            firstName: false,
            lastName: false,
            postalCode: false,
        })
  }

  return (
    <div className="checkout-info-container">
      <div className="checkout-info-wrapper">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="checkout-info">
            <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
              <input
                type="text"
                className={`form-input ${errors.firstName ? 'error' : ''}`}
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
              <input
                type="text"
                className={`form-input ${errors.lastName ? 'error' : ''}`}
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className={`form-group ${errors.postalCode ? 'error' : ''}`}>
              <input
                type="text"
                className={`form-input ${errors.postalCode ? 'error' : ''}`}
                placeholder="Zip/Postal Code"
                value={postalCode}
                onChange={handlePostalCodeChange}
              />
            </div>
            <div className={`error-message-container ${error ? 'error' : ''}`}>
              <p className="error-message">{error}</p>
              <span className="cancel-icon" onClick={resetForm} >x</span>
            </div>
          </div>
          <div className="checkout-buttons">
            <Link to={'/cart'}><button className="cancel-btn">Cancel</button></Link>
            <button className="continue-btn" onClick={handleError}>Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutStepOne;
