'use strict'
export default class Store{
    getItem(item){
        return fetch('http://localhost:3100/items')
            .then((resp)=>{
                if(resp.ok){
                    return Promise.resolve(resp)
                }else{
                    return Promise.reject(resp)
                }
            })
    }
}