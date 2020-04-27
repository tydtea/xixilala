import lagouInit from "../../state/lagou"
export default function (state=lagouInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_LAGOU"){
        console.log(1111111,payload.pageNo);
        // console.log(1111,payload); connect Provider
        state.pageSize = payload.pageSize;
        state.pageNo = payload.pageNo;
        if(payload.pageNo === 1){
            state.result = payload.result;
        }else{
            state.result = [
                ...state.result,
                ...payload.result
            ];
        }

    }
    return state;
}