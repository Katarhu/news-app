import React, {ChangeEvent, memo, useId} from "react";

import * as styles from './Input.module.scss';

interface InputProps {
    type?: "text" | "email" | "number" | "password";
    onChange: (event: ChangeEvent) => void;
    value: string | number;
    labelText: string;
    className?: string;
    autoComplete?: string;
}


function Input({ type = "text", onChange, value, labelText, className = styles.inputLined, autoComplete="News search bar"}: InputProps) {

    const id = useId();

    return (
        <div className={styles.inputContainer}>
            <input
                className={className}
                id={id}
                type={type}
                placeholder={' '}
                onChange={onChange}
                value={value.toString()}
                autoComplete={autoComplete}
            />

            <label
                className={styles.label}
                htmlFor={id}
            >
                {labelText}
            </label>
        </div>
    );
}

export default memo(Input);