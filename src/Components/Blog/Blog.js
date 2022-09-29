import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <h1>Questions:</h1>
            <h2>1.How does react works?</h2>
            <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            <h2>2.Difference between props and state</h2>
            <p>Ans: State is a hook.if we want to do interaction.and we can send data by state.And other side which data we send those data will recive props.Props is receving data</p>
            <h2>3.how useEffect works for?</h2>
            <p>Ans:  you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
        </div>
    );
};

export default Blog;