import React from 'react';
import user from '../images/user.png'

let id = 1;


const CardContact = (props) => {

    

    const {id, name, email } = props.contact

    return (
        <div className="ui card" key={id}>
        <div className="content">
        <img className='ui avatar image' src={user} alt="user"></img>
            <div className="header">
                {id}
                {name}
            </div>
            <div>{email}</div>
            
        </div>
        <div className='content' >
        <i 
        className='trash alternate outline icon right floated' 
        style={{color:"red"}}
        onClick={() => props.clickHandler(id)}
        ></i>
        </div>
    </div>
    )
};

export default CardContact;