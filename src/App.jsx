import { useState } from "react";
import ProductsData from "./data/products.json";

import Product from "./components/products";
import Header from "./components/products/Header";
import Footer from "./components/products/Footer";
import STATE from "./STATE";
import ConditionalRendering from "./components/ConditionalRendering/index";
import EventHandelling from "./components/Eventhandelling/index";
import EventHandellingByFunction from "./components/Eventhandelling/eventHandellingbyFunction";
import EventBinding from "./components/EventBinding";
import Hook from "./components/Hook";
import Form from "./components/Form";
import FormHandelling from "./components/FormHandelling/form";
import Child from "./components/Child/child";
import Home from "./components/TODO/Home";


function App() {
  const handleChildData = (childData) => {
    console.log(childData);
  };
  return (
    <>
      <div>
        <Header />
        <Product products={ProductsData} />
        <STATE />
        <ConditionalRendering />
        <EventHandellingByFunction />
        <EventHandelling />
        <EventBinding />
        <Hook />
        <Form />
        <FormHandelling />
        <Child
          data={"hello sent message from Parent(App)"}
          onHandleChildData={handleChildData}
        />
        < Home /> 
        <Footer />
      </div>
    </>
  );
}

export default App;
