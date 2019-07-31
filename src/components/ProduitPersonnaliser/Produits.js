import React, { Component } from 'react';

import './Produits.css';
import RadioButtons from './RadioButtons';






export default class Produits extends Component {
    render() {
        return (
            
                <div className="produits-container">
                    <div className="produit-container">
                        <img className="img-produit" src="https://www.ceramiq-wear.com/2057-fullscreen/courchevel-ii-t-shirt-manches-courtes-1-2-zip-pour-homme.jpg"/>
                        <p>T-shirt pour Homme</p>
                    </div>
                    <div>
                        <p>Couleur de produit</p>
                        <RadioButtons/>
                    </div>
                    <p>Taille</p>
                    <div className="taille-container">
                        <div className="bloc-taille">
                        <p>S</p>
                        <input className="input-size" type="text"/>
                        </div>
                        <div className="bloc-taille">
                        <p>M</p>
                        <input className="input-size" type="text"/>
                        </div>
                        <div className="bloc-taille">
                        <p>L</p>
                        <input className="input-size" type="text"/>
                        </div>

                        <div className="bloc-taille">
                        <p>XL</p>
                        <input className="input-size" type="text"/>
                        </div>
                        <div className="bloc-taille">
                        <p>2XL</p>
                        <input className="input-size" type="text"/>
                        </div>
                        
                    </div>

                </div>
            
        )
    }
}
