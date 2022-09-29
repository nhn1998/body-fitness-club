import React, { useEffect, useState } from 'react';
import Exercise from '../exercise/Exercise';
import './Body.css'
const Body = () => {
    const [infos,setInfos]=useState([])
    useEffect(()=>{
        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setInfos(data))
    },[])
    return (
        <div className='body-container'>
            <div className="product-container">
            {
                infos.map(info=><Exercise key={info.id} info={info}></Exercise>)
            }
            </div>
            <div className="cart-container">
                <h2>This is cart</h2>
            </div>
        </div>

    );
};

export default Body;