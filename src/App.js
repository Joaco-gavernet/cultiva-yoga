import React from 'react';
import { Hero, Navbar, Presentation } from './components';

function App() {
  return (
    <div className="resize-none w-full flex flex-col justify-center">
      <Navbar className={'flex flex-row justify-center items-center h-[80px] '} />
      <div className="flex-grow border-t border-gray-400 mx-20"></div>
      <Hero />
      <Presentation />
    </div>
  );
}

export default App;
