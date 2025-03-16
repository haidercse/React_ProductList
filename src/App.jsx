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
import Toggole from "./components/Toggole/toggole";
import UseEffect from "./components/Hook/SetUseEffect/UseEffectExample.jsx";
// import DataFatch from "./components/Hook/DataFatch/dataFatch.jsx";
import DataFatch from "./components/Hook/CustomHook/DataFatch.jsx";
import ToasterMessage from "./components/Toastify/ToasterMessage.jsx";
import DynamicStyling from "./components/DynamicStyling/DynamicStyling.jsx";
import Table_tab from "./components/Table_fragment/Table_tab.jsx";
import Users from "./components/PropTypes/Users_types.jsx";


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
        <Toggole />
        <UseEffect />
        {/* <DataFatch /> */}
        <ToasterMessage />
        <DynamicStyling />
        {/* <Table_tab /> */}
        <Users />
        <Footer />
      </div>
    </>
  );
}

export default App;
