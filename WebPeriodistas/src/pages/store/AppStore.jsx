import React from 'react';
import StoreNav from './StoreNav';
import StoreFooter from './StoreFooter';
import Store from './Store';
import ProductCard from './ProductCard';
import './store.css';

function AppStore() {
  return (
    <div className='app-store'>
      <StoreNav />
      <Store />
      <ProductCard />
      <StoreFooter />
    </div>
  );
}

export default AppStore;
