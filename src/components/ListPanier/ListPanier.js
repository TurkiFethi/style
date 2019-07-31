import React, { Component } from 'react'
import './ListPanier.css' 
import {connect} from "react-redux"

 class ListPanier extends Component {
    render() {
        const panier = this.props.items.map(el=>           
         <div className="list-panier-container">
        <div className="desc-list-panier">
            <p>{el.typeProduit}</p>
            <p>{el.prixProduits}d</p>
            <div className="display">
            <input className="input-list-panier" type="text"></input>
            <p>Prix total</p>
            </div>

        </div>
            <img className="img-list-panier" src={el.imageProduits}/>
    </div>)
        return (
            <div>
                <p className="item-panier">Panier</p>
                {panier}

        </div>
            
        )
    }
}

const mapStateToProps=state=>({
    items: state.addedItems
})
export default connect(mapStateToProps)(ListPanier)


