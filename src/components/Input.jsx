import React from 'react';

const Input = ({as: Tag = "input", ...props}) => {
    const classes = "my-2 px-4 py-2 w-[250px] bg-stone-500 text-stone-100 cursor-pointer placeholder:text-stone-100 focus:placeholder:text-transparent";
    return (
        <Tag {...props} className={classes}></Tag>
    );
};

export default Input;