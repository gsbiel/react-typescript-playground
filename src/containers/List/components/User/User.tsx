import React from 'react';
import './User.css'

const User = (props: {name: String, email: String, imgUrl: string}) => {
    return(
        <div className="user">
            <div className="photo-container">
                <img className="photo" src={props.imgUrl} alt="user image"/>
            </div>
            <div className="user-data-container"> 
                <p className="name">{props.name}</p>
                <p className="email">{props.email}</p>
            </div>
        </div>
    );
};

export default User;