import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const Input = (props) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        const value = props.value;
        setValue(value);
    }, [props.value]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <textarea
            className={`Input ${props.className}`}
            value={value}
            placeholder={props.placeholder}
            onChange={props.onChange ? props.onChange : handleChange}
            onBlur={props.onBlur}
            cols="30"
            rows={props.rows}
        ></textarea>
    );
};
