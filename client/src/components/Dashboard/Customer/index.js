import React, { useState } from 'react'
import {BrowserRouter} from "react-router-dom";
// import { render } from "react-dom";
// import { Link } from "react-router-dom";

import Header from "../../Dashboard/Customer/header";
import TabOptions from '../Customer/tabOptions';
import Footer from '../../Dashboard/Customer/footer';
import Account from './Account';
import PastOrders from './PastOrders';

// import OrderCart from "../../components/common/OrderCart"

const Customer = () => {
    const [activeTab, setActiveTab] = useState("Account");

  return (
    <div>
        <BrowserRouter>
        <Header />
        <TabOptions activeTab = {activeTab} setActiveTab = {setActiveTab}/>
        {getCorrectScreen(activeTab)}
        
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Account":
            return <Account/>
        case "Past Orders":
            return <PastOrders/>
        default:
            return <Account/>
    }
};
export default Customer;