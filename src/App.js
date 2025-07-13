import React from 'react';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="app">
          <Outlet />
          {/* 필요한 경로를 여기에 추가 */}
    </div>
  );
}

export default App;
