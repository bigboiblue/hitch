import React, { useState, useLayoutEffect } from "react";

/** Returns [width, height] */
export default function useWindowSize(): [number, number] {
    let [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize(): void {
            setSize([window.innerWidth, window.innerHeight]);
        }
        updateSize();
        window.addEventListener("resize", updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    // @ts-ignore
    return size;
}
