import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {clickToAddCart}=props;
    const {name,img, time}=props.info

    return (
        <div className='img'>
            <img src={img} alt="" />
            <h4 className='info'>{name}</h4>
            <p className='info'>Time required: {time}</p>
            <button onClick={()=>clickToAddCart(props.info)} className='btn'>Add To List</button>
        </div>
    );
};

export default Exercise;