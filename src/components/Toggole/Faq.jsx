import React, { useState } from "react";
import style from "./faq.module.css";
const Faq = ({ id, title, des }) => {
  const [toggole, setToggole] = useState(false);
  return (
    <article className={style.faq}>
      <div>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setToggole(!toggole);
          }}
        >
          {toggole ? "-" : "+"}
        </button>
      </div>
      {toggole && <p>{des}</p>}
    </article>
  );
};

export default Faq;
