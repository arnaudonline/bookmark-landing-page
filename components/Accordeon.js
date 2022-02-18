import { useState } from "react";

const Accordeon = () => {
    const [accorState, setAccorState] = useState();

    const activeAccor = (index) => {
        setAccorState(index);
    };

    return (
        <>
        </>
    )

};

export default Accordeon;