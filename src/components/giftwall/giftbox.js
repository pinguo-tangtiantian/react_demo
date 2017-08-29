import React, {Component} from 'react';
import Gift from './gift.js';

export default class Giftbox extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        // console.log(this.props)
      }

    render(){
        return (
            <div className="gift-box">
                <img className="user-img" src={this.props.data.firstRewardUserInfo.avatar} />
                <p className="user-name">{this.props.data.firstRewardUserInfo.nickname}</p>
                <Gift data={this.props.data.itemInfo}/>
                <div className="gift-amount">x{this.props.data.count}</div>
                <p className="gift-name">{this.props.data.itemInfo.name}</p>
            </div>
        )
    }
}