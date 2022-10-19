import service from "../axios.js"


export const getlogin = data => service({
    url: `api/user/login`,
    method: "post",
    data
})