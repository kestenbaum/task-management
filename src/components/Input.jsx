import React from 'react';

const Input = ({textarea, label, ...props}) => {
    const classes = "my-2 px-4 py-2 w-[250px] bg-stone-500 text-stone-100 cursor-pointer placeholder:text-stone-100 focus:placeholder:text-transparent";
    return (
        <p>
            <label>{label}</label>
            {textarea
                ? <textarea className={classes} {...props} />
                : <input className={classes} {...props} />}
        </p>
    );
};

export default Input;