import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router"

import { initPageLayout } from '@/utils/lifeCircle';
import { isMobile } from "@/utils/commonUtils";
import MobileBaseUrl from '@/MobilePages';
import PCBaseUrl from '@/PCPages';
import PureText from '@/MobilePages/QrCode/PureText';
import PhoneNumber from '@/MobilePages/QrCode/PhoneNumber';

function App() {

  useEffect(() => {
    initPageLayout()
    window.addEventListener('resize', () => {
      // 监听屏幕宽度变化，动态设置根字体大小，以适配不同屏幕。但是最小宽度为设计稿宽度
      initPageLayout()

      return () => {
        window.removeEventListener('resize');
      }
    })
  }, []);

  if (isMobile()) {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<MobileBaseUrl />} />
          <Route path="/qrCode/pureText" element={<PureText />} />
          <Route path="/qrCode/phoneNumber" element={<PhoneNumber />} />
        </Routes>
      </HashRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PCBaseUrl />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;