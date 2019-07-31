import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavbarPersDesign.css';
import Produit from '../ProduitPersonnaliser/Produits'
import Motif from '../Motif/Motif'

export default class NavbarPersDesign extends Component {
    render() {
        const {toggleDisplay} = this.props
        return (
            
            <div className="navbar-pers-design-container">
                <div className="navbar-display">
                    <img className="img-action" src="https://svgsilh.com/svg_v2/154688.svg"/>
                    <button className="link" onClick={()=>toggleDisplay(true)}>Produit</button>
                </div >
                <div className="navbar-display">
                    <img className="img-action" src="https://svgsilh.com/svg_v2/154688.svg"/>
                    <button className="link" onClick={()=>toggleDisplay(false)}>Motif</button>
                </div>
                <div className="navbar-display">
                    <img className="img-action" src="https://image.flaticon.com/icons/png/512/12/12100.png"/>
                    <button className="link">Text</button>
                </div>
                <div className="navbar-display">
                    <img className="img-action" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7G5OBvBHMqwyE-BPxOrTwLD7n3ALz-pwus-HuxrnFdlEPcVX"/>
                    <button className="link">Upload</button>
                </div>
            </div>
        )
    }
}
