import React from 'react';
import "./Comment.css"


const Comment = () => {
    return (
        <>

        <div className='contact-form-container'>
        <div className='skills'>
            <h1 style={{color: "white"}}>Skills</h1>
            <li> <h3>Html</h3> 
            <span className='bar'><span className='html'></span></span>
        </li>
        <li> <h3>Javascript</h3> 
            <span className='bar'><span className='Javascript'></span></span>
        </li>
        <li> <h3>Css</h3> 
            <span className='bar'><span className='Css'></span></span>
        </li>
        <li> 
            <h3>Python</h3> 
            <span className='bar'><span className='Python'></span></span>
        </li>
        <li> <h3>C++</h3> 
            <span className='bar'><span className='c-plus-plus'> </span></span>
        </li>

        
        
        </div>
        </div>
        </>
    );
};

export default Comment;