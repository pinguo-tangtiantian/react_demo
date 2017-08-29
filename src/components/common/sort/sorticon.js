import React, {Component} from 'react';



export default class Sorticon extends Component{
    // iconClick = () => {
    //     alert("ok");
    // }

    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div className="sort-icon" onClick={this.props.iconClick}>
            排序
                {/* <img src={this.props.imgurl} /> */}
            </div>
        )
    }
}