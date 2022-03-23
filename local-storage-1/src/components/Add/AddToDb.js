import React from 'react';
import { cartItem, cartItemRemove } from '../utilities/fakeDb';
import './person.css';

const AddToDb = (props) => {
    const { name, id, gender } = props.datas;
    return (
        <div className='person'>
            <h2>Name: {name}</h2>
            <h5>Gender: {gender}</h5>
            <h6>Id: {id}</h6>
            <button onClick={() => cartItem(id)}>Add to Cart</button>
            <button onClick={() => cartItemRemove(id)}>Remove from Cart</button>
        </div>
    );
};

export default AddToDb;