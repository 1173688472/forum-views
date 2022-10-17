import service from "../axios.js"


export const getlogin = data => service({
    url: `/user/login`,
    method: "post",
    data
})