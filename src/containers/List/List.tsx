import React, {Fragment} from 'react';

import {useState} from 'react'
import './List.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import User from './components/User/User';
import Spinner from './components/Spinner/Spinner';

const List = () => {

    const [loadingFlag, setLoadingFlag] = useState(false);

    let content = (
            <Fragment>
                <User name="Gabriel Silva Gaspar" email="gabriel.sgaspar@yahoo.com.br" imgUrl="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" />
                <User name="Gabriel Silva Gaspar" email="gabriel.sgaspar@yahoo.com.br" imgUrl="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" />
                <User name="Gabriel Silva Gaspar" email="gabriel.sgaspar@yahoo.com.br" imgUrl="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" />
                <User name="Gabriel Silva Gaspar" email="gabriel.sgaspar@yahoo.com.br" imgUrl="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" />
                <User name="Gabriel Silva Gaspar" email="gabriel.sgaspar@yahoo.com.br" imgUrl="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" />
            </Fragment>
    );

    if(loadingFlag){
        content = <Spinner/>;
    }

    return (
        <div className="list">  
            <Header/>
            <div className="main-section">
                {content}  
            </div>
            <Footer current={1} max={2} />   
        </div>    
    );
};

export default List;