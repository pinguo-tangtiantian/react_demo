import React, { Component } from 'react';

import Header from '../components/home/header.js';   //引入header组件
import '../css/Home.css';

export default class Home extends Component{
    render() {
        return (
            <div className="content">
                <Header />
                <div>Hi,this is my demo of react.</div>
            </div>
        )
    }
}