import React, {Fragment} from 'react';

import {useState, useEffect} from 'react'
import './List.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import User from './components/User/User';
import Spinner from './components/Spinner/Spinner';

import {APIData} from '../../services/users_api';
import { DataApiResponse } from '../../interfaces/interfaces';

const List = () => {

    const [loadingFlag, setLoadingFlag] = useState<Boolean>(true);
    const [listData, setListData] =  useState<DataApiResponse>()

    useEffect(() => {
        APIData.fetchUserData()
            .then(data => {
                setListData(data);
                setLoadingFlag(false);
            })
    });

    let content = (
        <Fragment>
            {
                listData?.data.map(user => {
                    return <User key={user.id} name={user.first_name + " " + user.last_name} email={user.email} imgUrl={user.avatar} />
                })
            }
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
            <Footer current={listData?.page ? listData.page : 99} max={listData?.total_pages ? listData.total_pages : 99} />   
        </div>    
    );
};

export default List;