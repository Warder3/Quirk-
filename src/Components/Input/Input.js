import React, { useState } from 'react';
import './Input.css';

const Input = ({ url, setUrl, route, setRoute }) => {
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  // Calls api to produce code and uses ternary operator to output to browser
  const handleSubmit = async (e) => {
    if (url !== '') {
      let submittedUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${url}`;
      setRoute(submittedUrl);
    }
    e.preventDefault();
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="router">Enter URL here:</label>
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          sumbit
        </button>
      </form>
    </>
  );
};

export default Input;
