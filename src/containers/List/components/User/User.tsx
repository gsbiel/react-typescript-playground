import React from 'react';
import './User.css'

const User = () => {
    return(
        <div className="user">
            <div className="photo-container">
                <div className="photo">

                </div>
            </div>
            <div className="user-data-container">
                <p className="name">Gabriel Silva Gaspar</p>
                <p className="email">gabriel.sgaspar@yahoo.com.br</p>
            </div>
        </div>
    );
};

export default User;