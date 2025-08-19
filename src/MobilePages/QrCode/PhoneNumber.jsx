import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PhoneNumber = () => {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const phoneNumber = queryParams.get('phone');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
      const textArea = document.createElement('textarea');
      textArea.value = phoneNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      padding: '40px 24px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxSizing: 'border-box'
    }}>
      {/* 主容器 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '24px',
        padding: '48px 32px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        {/* 图标区域 */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
          boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)'
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>

        {/* 标题 */}
        <h1 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#64748b',
          margin: '0 0 16px',
          letterSpacing: '0.5px'
        }}>
          电话号码
        </h1>

        {/* 电话号码显示 */}
        <div style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: '40px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '1px'
        }}>
          {phoneNumber || '未找到电话号码'}
        </div>

        {/* 按钮容器 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%'
        }}>
          {/* 拨号按钮 */}
          <button
            onClick={handleCall}
            style={{
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.3)';
            }}
          >
            拨打电话
          </button>

          {/* 复制按钮 */}
          <button
            onClick={handleCopy}
            style={{
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: '600',
              background: copied 
                ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                : 'rgba(255, 255, 255, 0.9)',
              color: copied ? 'white' : '#64748b',
              border: copied ? 'none' : '2px solid #e2e8f0',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: copied 
                ? '0 4px 16px rgba(16, 185, 129, 0.3)'
                : '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={(e) => {
              if (!copied) {
                e.target.style.background = '#f8fafc';
                e.target.style.borderColor = '#cbd5e1';
                e.target.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!copied) {
                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            {copied ? '✓ 已复制' : '复制号码'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
