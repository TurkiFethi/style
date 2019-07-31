import React from 'react'
import './Search.css'
function Search(){
    return(
        <div className="search-top" >
            <input className="input-search"  type="text" placeholder="Recherche une marque, un produit, une référence..."/>
            <img className="img-search" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"/>
        </div>

    )
}
export default Search