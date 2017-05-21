'use strict'
export default class Store{
    getItem(item){
        return fetch('http://localhost:3100/items')
            .then((resp)=>{
                return resp.json()
            })
    }
}