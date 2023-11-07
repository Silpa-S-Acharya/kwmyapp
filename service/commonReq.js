import axios from "axios";


//Common structure for all api request
export const commonReq=async (method,url,body,header) => {
    
    let config={
        method,
        url,
        body,
        headers:header?header:"application/json",
        data:body
    }
    return axios(config).then(response=>{
        console.log(response);
        return response

    }).catch(err=>{
        console.log(err);
        return err
    })
    
}
module.exports=commonReq;