import service from "../axios.js"

//登录接口
export const getlogin = data => service({
    url: `api/user/login`,
    method: "post",
    data
})
//注册接口
export const getRegister = data => service({
    url: `api/user/register`,
    method: "post",
    data
})