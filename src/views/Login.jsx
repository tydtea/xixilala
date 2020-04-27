import React, {Component} from 'react';
import MyCom from "../components/MyCom";
import Two from "../components/Two"
import pubsub from "pubsub-js"
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>登陆页面
                <MyCom></MyCom>
                <Two></Two>
            </div>
        )
    }
    componentDidMount() {
        // 生成订阅者
        pubsub.subscribe("one",(msgName,{a,b,c})=>{
            console.log("login",msgName,a,b,c);
        })
        // pubsub.subscribe("one",(result,a)=>{
        //     console.log(2222222,result,a);
        // })
    }
}