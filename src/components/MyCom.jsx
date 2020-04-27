import React, {Component} from 'react';
import pubsub from "pubsub-js";
export default class MyCom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                我是一个MyCom组件
                <input type="button" value={"发送"} onClick={()=>{
                    // pubsub.publish("one",1,2,3,4);// 发布
                    // pubsub.publish("one",{a:1,b:2,c:3})
                    // 同步
                    pubsub.publishSync("one",{a:1,b:2,c:3})
                    // console.log("over");
                }}/>
            </div>
        )
    }
}