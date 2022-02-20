import { useState } from "react";
import { Faq } from "../data/faq";

const Accordeon = () => {
    const [accorState, setAccorState] = useState(0);

    const activeAccor = (index) => {
        setAccorState(index);
    };

    return (
        <div className="accor-container">
            {Faq.map((data, key) => {
                return (
                    <div className="accor-block" key={key}>
                        <button
                            className={accorState === key ? "title active-title" : "title"}
                            onClick={() => activeAccor(key)}
                        >
                            {data.question}
                        </button>
                        <p>{data.answer}</p>
                    </div>
                );
            })}
        </div>
    )
};

export default Accordeon;