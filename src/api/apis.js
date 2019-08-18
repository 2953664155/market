import axios from "axios"

const inst = axios.create({
    baseURL: "http://localhost:666"
})
//用户列表接口
export const listUser = () => {
    return inst
        .get('/user/listUser')
        .then(({ data }) => {
            return data;
        })
}
//添加用户接口
export const addUser = (newUser)=>{
    return inst
        .post('/user/addUser', newUser)
        .then(({data}) => {
            return data;
        })
}
//商品列表接口
// export const product = ()=>{
//     return inst
//         .get('/product/getProductList')
//         .then(({data}) => {
//             return data;
//         })
// }

//商品列表分页接口
export const product = (pageSize,currentPage)=>{
    return inst
        .get('/product/queryPage',{
            params:{
                pageSize,
                currentPage
            }
        })
        .then(({data}) => {
            return data;
        })
}