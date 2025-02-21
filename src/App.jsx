import { useState } from 'react'
import ProductsData from './data/products.json'

import Product from './components/products'
import Header from './components/products/Header'
import Footer from './components/products/Footer'
import STATE from './STATE'
import ConditionalRendering from './components/ConditionalRendering/index'

function App() {

  return (
    
    <>
      <div>
        <Header />
        <Product products={ProductsData} />
        <STATE />
        < ConditionalRendering />
        <Footer />
    </div>
    </>
  )
}

export default App;
