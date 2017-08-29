import React, {Component} from 'react';

export default class Giftbox extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
      }
    render() {
        return (
            <div className="gift">
                <img className="gift-img" src={this.props.data.animation} />
                <p>
                    <span className="gift-icon"></span>
                    <span className="gift-value">{this.props.data.price}</span>
                </p>
            </div>
        )
    }
}