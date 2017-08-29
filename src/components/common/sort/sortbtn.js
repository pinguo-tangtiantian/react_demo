import React, {Component} from 'react';

export default class Sortbtn extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
                <div className="sortby" onClick={this.props.btnClick} data-type={this.props.type}>{this.props.by}</div>
        )
    }
}