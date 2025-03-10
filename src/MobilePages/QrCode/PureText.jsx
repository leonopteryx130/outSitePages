import React from 'react';
import { useLocation } from 'react-router-dom';

const PureText = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const text = queryParams.get('text'); // "John"

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      boxSizing: 'border-box',
      padding: '0 75px',
      overflow: 'hidden'
    }}>
      <div style={{
        fontSize: '28px',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        whiteSpace: 'normal',
        wordBreak: 'break-all'
      }}>
        {text}
      </div>
    </div>
  );
}

export default PureText;