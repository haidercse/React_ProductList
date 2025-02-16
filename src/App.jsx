import { useState } from 'react'
import ProductsData from './data/products.json'

import Product from './components/products'
import Header from './components/products/Header'
import Footer from './components/products/Footer'

function App() {

  return (
    
    <>
      <div>
        <Header />
        <Product products={ProductsData} />
        <Footer />
    </div>
    </>
  )
}

export default App;
