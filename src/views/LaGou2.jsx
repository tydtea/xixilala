import React, {Component} from 'react';
import axios from "axios";
export default class Lagou extends Component {
    constructor(props) {
        super(props);
        this.btn = null;
        this.state = {
            pageNo:0,
            pageSize:10,
            result:[]
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.result.map(v=>(
                        <div key={v.positionId}>
                            <h3>{v.positionName}</h3>
                            <img style={{width:"60px"}} src={'https://www.lgstatic.com/'+v.companyLogo} alt=""/>
                        </div>
                    ))
                }
                <input type="button" ref={e=>this.btn=e} onClick={this.listMore.bind(this)} value={"加载更多"}/>
            </div>
        )
    }
    async listMore(){
        this.state.pageNo++;
        this.btn.value="加载中……"
        const {data} = await axios.get("/lagou/listmore.json",{
            params:{
                pageNo:this.state.pageNo,
                pageSize:this.state.pageSize
            }
        })
        this.setState({
            pageNo:data.content.data.page.pageNo,
            pageSize:data.content.data.page.pageSize,
            result:[
                ...this.state.result,
                ...data.content.data.page.result
            ]
        })
        console.log(data.content.data.page);
    }
    async componentDidMount() {
        this.listMore();
    }
}