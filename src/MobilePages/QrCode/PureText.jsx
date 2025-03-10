import React from 'react';

const PureText = () => {

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const text = params.get('text'); // "John"

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