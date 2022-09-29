import React, { useEffect, useState } from 'react';
import Exercise from '../exercise/Exercise';
import image from '../../nayeem.png'
import './Body.css'
import Blog from '../Blog/Blog';
const Body = () => {
    const [infos,setInfos]=useState([])
    const [carts,setCarts]=useState(0);
    const [breaks,setBreaks]=useState(0);
    useEffect(()=>{
        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setInfos(data))
    },[])
    const clickToAddCart=(info)=>{
        const newCart= carts+parseInt(info.time);
        setCarts(newCart)
    }
    const breakTimeAddToCart=()=>{
        setBreaks('10')
    }
    const breakTimeAddToCart2=()=>{
        setBreaks('20')
    }
    const breakTimeAddToCart3=()=>{
        setBreaks('30')
    }
    const breakTimeAddToCart4=()=>{
        setBreaks('40')
    }
    const breakTimeAddToCart5=()=>{
        setBreaks('50')
    }
    return (
        <div className='body-container'>
            <div className="product-container">
            {
                infos.map(info=><Exercise key={info.id} info={info} clickToAddCart={clickToAddCart}></Exercise>)
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
                <div className='break-item'>
                    <h3>Add a break</h3>
                    <div className='second'>
                        <button onClick={breakTimeAddToCart}>10s</button>
                        <button onClick={breakTimeAddToCart2}>20s</button>
                        <button onClick={breakTimeAddToCart3}>30s</button>
                        <button onClick={breakTimeAddToCart4}>40s</button>
                        <button onClick={breakTimeAddToCart5}>50s</button>
                    </div>
                </div>
                <div>
                    <h2>Exercise Details</h2>
                    <h4>Exercise Time: {carts}Mins</h4>
                    <h4>Break Time: {breaks}</h4>
                </div>
            </div>
            <Blog></Blog>
        </div>

    );
};

export default Body;