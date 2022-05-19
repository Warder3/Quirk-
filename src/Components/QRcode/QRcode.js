import React from 'react';
import './QRcode.css';

const QRcode = ({ route }) => {
  return (
    <>
      {route ? (
        <img src={route} alt="" title=""></img>
      ) : (
        <p>There is no QR code created</p>
      )}
    </>
  );
};

export default QRcode;
