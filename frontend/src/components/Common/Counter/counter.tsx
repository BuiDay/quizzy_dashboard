import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface IPops {
    to: number,
    from: number,
}

const Counter: React.FC<IPops> = ({ to, from }) => {
    const nodeRef:any = useRef();

    useEffect(() => {
        const node:any = nodeRef.current;
        const controls = animate(from, to, {
            duration: 0.6,
            onUpdate(value) {
                node.textContent =  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(Number(value.toFixed(0) || 0));
            }
        })
        return () => controls.stop();
    }, [from, to])

   return <p ref={nodeRef} />;
};

export default Counter;


