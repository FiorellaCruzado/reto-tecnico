import React from 'react';


const Input = ({
    error,
    onChange,
    name,
    type,
    className,
    placeholder,
    maxlength,
    errortxt,
    classNameGroup,
    value
}) => {

    return (
        <div className={classNameGroup || 'form__item'}>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={`form__item__input ${className}`}
                onChange={onChange}
                maxlength={maxlength}
                value={value}
            />
            {error && <label>{errortxt}</label>}
        </div>   
    )
}

export default Input;