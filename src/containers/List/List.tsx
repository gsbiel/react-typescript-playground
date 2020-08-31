import React from 'react';
import './List.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import User from './components/User/User';

const List = () => {
    return (
        <div className="list">
            <Header/>
            <div className="main-section">
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/> 
            </div>
            <Footer/>
        </div>    
    )
}

export default List;