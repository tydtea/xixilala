import React, {Component} from 'react';
import pubsub from "pubsub-js"
export default class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Two
            </div>
        )
    }
    componentDidMount() {
        pubsub.subscribeOnce("one",()=>{
            console.log("TWo.jsx")
        })
        const a = 1;// 用户名。

        // pubsub.subscribe("one",(msgName,{a,b,c})=>{
        //     // pubsub.unsubscribe("one");
        //     console.log(pubsub);
        //     pubsub.clearAllSubscriptions();//
        //     console.log("Two组件",msgName,a,b,c)
        // })
    }
}