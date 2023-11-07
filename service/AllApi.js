import base_url from "./base_url";
import { commonReq } from "./commonReq";


//register

export const registerApi=async(header,body)=>{
    return await commonReq("POST",`${base_url}/user/register`,body,header)
}
module.exports=registerApi;