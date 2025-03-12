import React, { useState } from "react";
import { data } from "./toggoleData";
import style from "./faq.module.css"
import Faq from "./Faq";

function toggole() {
  const [faqs, setFaq] = useState(data);
  
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>FAQ</h1>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
}

export default toggole;
