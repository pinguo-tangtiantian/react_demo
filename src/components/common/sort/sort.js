import React, { Component } from 'react';
import Sorticon from './sorticon.js';
import Sortbtn from './sortbtn.js';

export default class Sort extends Component {
    iconClick = () => {
        if (this.state.btn_display == 'none') {
            this.setState({
                btn_display: 'block'
            });
        } else {
            this.setState({
                btn_display: 'none'
            });
        }
    }

    btnClick = (event) => {
        this.setState({
            btn_display: 'none'
        });
        let type = event.target.getAttribute("data-type");
        this.props.handleClick(type);
    }

    constructor(props) {
        super(props);
        this.state = {
            btn_display: 'none',
        }
    }

    render() {
        return (
            <div className="sort-box">
                <Sorticon iconClick={this.iconClick} />
                <div className="sort-btns" style={{ display: this.state.btn_display }} >
                    <Sortbtn btnClick={this.btnClick} by="数量" type="count" />
                    <Sortbtn btnClick={this.btnClick} by="价格" type="itemInfo.price" />
                </div>
            </div>
        )
    }
}