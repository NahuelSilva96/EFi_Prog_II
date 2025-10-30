import React from 'react';
import StoreNav from './StoreNav';
import StoreFooter from './StoreFooter';
import Store from './Store';
import './store.css';

function AppStore() {
  return (
    <div className='app-store'>
      <StoreNav />
      <Store />
      <StoreFooter />
    </div>
  );
}

export default AppStore;
