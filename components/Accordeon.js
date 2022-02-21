import { useState } from "react";
import { Faq } from "../data/faq";
import styles from "../styles/Accordeon.module.scss";

const Accordeon = () => {
  const [accorState, setAccorState] = useState();

  const activeAccor = (index) => {
    setAccorState(index);
  };

  return (
    <div className={styles.accor_container}>
      {Faq.map((data, key) => {
        return (
          <div className={styles.accor_block} key={key}>
            <button
              className={
                accorState === key
                  ? styles.title + " " + styles.active_title
                  : styles.title
              }
              onClick={() => activeAccor(key)}
            >
              {data.question}
            </button>
            <p
              className={
                accorState === key
                  ? styles.content + " " + styles.active_content
                  : styles.content
              }
            >
              {data.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Accordeon;
