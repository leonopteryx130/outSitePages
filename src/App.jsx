import React, { useEffect } from 'react';
import { Routes } from "react-router-dom";

import { initPageLayout } from '@/utils/lifeCircle';
import { isMobile } from "@/utils/commonUtils";

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
      <Routes>

      </Routes>
    )
  } else {
    return (
      <Routes>

      </Routes>
    )
  }
}

export default App;