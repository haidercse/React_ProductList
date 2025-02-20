import { useState } from 'react'
import ProductsData from './data/products.json'

import Product from './components/products'
import Header from './components/products/Header'
import Footer from './components/products/Footer'
import STATE from './STATE'

function App() {

  return (
    
    <>
      <div>
        <Header />
        <Product products={ProductsData} />
        <STATE />
        <Footer />
    </div>
    </>
  )
}

export default App;
