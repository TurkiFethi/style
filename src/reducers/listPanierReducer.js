import { ADD_LIST } from "../actions/actiontypes";
import React from 'react'
import { tabProduits } from "../data";

const initState={
    tabProduits: tabProduits,
    addedItems:[]
}

export default function listPanierReducer(state=initState,action) {
    switch(action.type){
        case ADD_LIST:
            if(state.addedItems.find(e=>action.payload.idProduits == e.idProduits)){
                return {...state, quantity: action.payload.quantity +=1}
            } else return {...state, addedItems: state.addedItems.concat(state.tabProduits.find(e=>action.payload.idProduits == e.idProduits)), quantity: action.payload.quantity = 1 }
        
        default: return state;   
    }






    return (
        <div>
            
        </div>
    )
}
