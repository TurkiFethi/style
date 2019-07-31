import {ADD_LIST,REMOVE_LIST} from './actionTypes'

export default function add(payload){
    return{
        type:ADD_LIST,
        payload
    }
}
export function remove (payload){
    return{
        type:REMOVE_LIST,
        payload
    }
}