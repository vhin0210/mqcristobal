import React from 'react';
import {
  Intro,
  Socials,
} from "./components/headers"

function App() {
  // Mockup: https://dribbble.com/shots/7846142-Single-Freelancer-Coder-Portfolio-PSD-Template
  return (
    <div className="bg-indigo-950 min-h-screen h-fit">
      <div className="container mx-auto">
        <header>
          <Intro />
          <Socials />
        </header>
        <div className="flex">
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
