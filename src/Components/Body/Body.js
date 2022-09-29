import React, { useEffect, useState } from 'react';
import Exercise from '../exercise/Exercise';
import image from '../../nayeem.png'
import './Body.css'
import Blog from '../Blog/Blog';
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
            <div className='cart-container'>
            <div>
                 <img src={image} alt="" />
            </div>
            <div className='name-adress'>
                <h3>Nayeem</h3>                     
                <p>Dhaka,Bangladesh</p>
            </div>
                <div className='weight'>
                <div className='Weight'>
                <h2>73<small>kg</small></h2>
                <p>Weight</p>
                </div>
                <div>
                    <h2>5.6</h2>
                    <p>Height</p>
                </div>
                    <div>
                        <h2>24<small>yrs</small></h2>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <Blog></Blog>
        </div>

    );
};

export default Body;