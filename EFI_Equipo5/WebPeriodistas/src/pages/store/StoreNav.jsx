import React from 'react';
import { Button } from 'primereact/button';

const StoreNavbar = () => {
  return (
    <nav className="store-navbar">
      <h1>Periodistas FC Store</h1>
      <div className="nav-buttons">
        <Button label="1" className="p-button-text" />
        <Button label="2" className="p-button-text" />
        <Button label="3" className="p-button-text" />
        <Button label="4" className="p-button-text" />
      </div>
    </nav>
  );
};

export default StoreNavbar;
