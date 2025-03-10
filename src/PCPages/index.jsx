import React from "react";

const PCBaseUrl = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      boxSizing: 'border-box',
      padding: '0 75px'
    }}>
      <div style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#6E6E6E',
        textAlign: 'center'
      }}>
        该项目作为开发其他项目的跳转页面使用，不建议直接访问
      </div>
    </div>
  );
}

export default PCBaseUrl;