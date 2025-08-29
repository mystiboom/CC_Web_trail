import React from "react";
import InteractiveGrid from "./components/InteractiveGrid";

export default function App() {
  return (
    <div className="app">
      <InteractiveGrid />
      <header className="hero">
      
      </header>

      <nav className="bottom-nav">
        <div className="brand">⚛ Decoding Bio</div>
        <div className="links">
          <button>ABOUT</button>
          <button>HOME</button>
          <button>EVENTS</button>
          <button>BLOGS</button>
          <button>CONTACT</button>
        </div>
        <button className="subscribe">SUBSCRIBE</button>
      </nav>
    </div>
  );
}
