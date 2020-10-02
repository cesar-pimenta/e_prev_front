import React from 'react';
import ItemComponent from './ItemComponent';

export default function OrderComponent(props){
    const items = props.items;
    console.log(props)
    return (
        <div>
            <h2> { props.OrderName } </h2>
            <ul>
                {items.map(item => <ItemComponent key={item.id} name={item.product}/>)}
            </ul>
        </div>
    )
}