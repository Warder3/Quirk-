import React, { useState } from 'react';

const Input = () => {
  // To handle the user submitted URL and return the QR
  const [url, setUrl] = useState('');
  const [route, setRoute] = useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let submittedUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${url}`;
    setRoute(submittedUrl);
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
        <img src={route} alt="" title=""></img>
      </form>
    </>
  );
};

export default Input;
