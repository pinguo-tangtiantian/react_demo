import React, { Component } from 'react';
import $ from 'jquery';

import Header from '../components/giftwall/header.js';   //引入header组件
import Giftbox from '../components/giftwall/giftbox.js'; //引入giftbox组件
import Sort from '../components/common/sort/sort.js';
import Common from './lib/common.js';
import '../css/Giftwall.css';


class Giftwall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giftList: []
        }
    }

    componentDidMount() {
        //获取数据
        $.ajax({
            url: "http://liveapi-dev.camera360.com/api/item/user-received-summary",
            type: "GET",
            data: {
                userId: "51fb04235ae6e1ab6be51677",
                appName: "Camera360",
                language: "zh-CN",
                platform: "ios",
                sig: "e5ac3ecc1b462d7aa357faf24981c0ab"
            },
            dataType: "json",
            success: function (res) {
                this.setState({
                    giftList: this.state.giftList.concat(res.data.receivedList)
                })
            }.bind(this)
        })
    }

    sortGiftList = (attr) => {
        this.setState({
            giftList: this.state.giftList.sort(Common.sortByAttr(attr))
        })
    }

    render() {
        return (
            <div className="content">
                <Header />
                <Sort handleClick={this.sortGiftList} />
                <div className="gift-wall">
                    {
                        this.state.giftList.map(function (item) {
                            return <Giftbox key={item._id} data={item} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Giftwall;
//attention:这里设置了默认抛出  所以定义Giftwall组件的时候不可以添加“export default”
