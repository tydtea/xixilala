import React, {Component} from 'react';
import axios from "axios";
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from 'redux';
import lagouCreator,{upLaGou} from '../store/actionCreator/lagou'
class Lagou extends Component {
    constructor(props) {
        super(props);
        this.btn = null;
    }

    render() {
        const {result} = this.props;
        return (
            <div>
                {
                    result.map(v=>(
                        <div key={v.positionId}>
                            <h3>{v.positionName}</h3>
                            <img style={{width:"60px"}} src={'https://www.lgstatic.com/'+v.companyLogo} alt=""/>
                            <hr/>
                        </div>
                    ))
                }
                <input type="button" ref={e=>this.btn=e} onClick={this.props.listMore.bind(this,this.props.pageNo+1)} value={"加载更多"}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.listMore.call(this);
        // if(this.props.result.length<1)
        //     this.props.listMore.call(this);
    }
}
function mapStateToProps({lagou}){
    return {
        result:lagou.result,
        pageNo:lagou.pageNo,
        pageSize:lagou.pageSize
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(lagouCreator,dispatch);
    // return {
    //
    //     // listMore(pageNo=1){
    //     //     dispatch(lagouCreator.listMore.call(this,pageNo))
    //     // }
    //
    //
    //
    //
    //     // listMore(pageNo=1){
    //     //     const listMore = async (dispatch)=>{
    //     //         // console.log(this.props)
    //     //         const {data} = await axios.get("/lagou/listmore.json",{
    //     //             params:{
    //     //                 pageNo,
    //     //                 pageSize:this.props.pageSize
    //     //             }
    //     //         })
    //     //         dispatch(upLaGou(data.content.data.page))
    //     //     }
    //     //     dispatch(listMore)
    //     // }
    //
    //
    //
    //
    //     // listMore(pageNo=1){
    //     //     dispatch(async (dispatch)=>{
    //     //         // console.log(this.props)
    //     //         const {data} = await axios.get("/lagou/listmore.json",{
    //     //             params:{
    //     //                 pageNo,
    //     //                 pageSize:this.props.pageSize
    //     //             }
    //     //         })
    //     //         dispatch(upLaGou(data.content.data.page))
    //     //     })
    //     // }
    //     //
    //
    //
    //
    //     // async listMore(pageNo=1){
    //     //     // console.log(this.props.pageNo,this.props.pageSize);
    //     //     const {data} = await axios.get("/lagou/listmore.json",{
    //     //         params:{
    //     //             pageNo,
    //     //             pageSize:this.props.pageSize
    //     //         }
    //     //     });
    //     //     dispatch(upLaGou(data.content.data.page))
    //     // }
    //
    //
    //
    //
    //     // async listMore(pageNo=1){
    //     //     // console.log(this.props.pageNo,this.props.pageSize);
    //     //     const {data} = await axios.get("/lagou/listmore.json",{
    //     //         params:{
    //     //             pageNo,
    //     //             pageSize:this.props.pageSize
    //     //         }
    //     //     });
    //     //     dispatch({
    //     //         type:"UP_LAGOU",
    //     //         payload:data.content.data.page
    //     //     })
    //     // }
    // }
}
export default connect(mapStateToProps,mapDispatchToProps)(Lagou);
