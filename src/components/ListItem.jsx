import React from 'react';

const ListItem = ({item}) => {
    return (
        <li className="text-stone-50 text-xl py-1">
            {item}
        </li>
    );
};

export default ListItem;