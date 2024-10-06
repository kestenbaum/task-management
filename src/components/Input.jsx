import React from 'react';

const Input = ({...props}) => {
    return (
        <input
            className="my-2 px-4 py-2 w-[250px] bg-stone-500 text-xs text-stone-100 cursor-pointer placeholder:text-stone-100 focus:placeholder:text-transparent"
            {...props}
        />
    );
};

export default Input;