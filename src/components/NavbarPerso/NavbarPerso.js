import React, { Component } from 'react';
//import PopoverPopupState from '../NavbarPerso/PopoverPopupState';
import PopoverPopupState from '../NavbarPerso/PopoverPopupState';

import './NavbarPerso.css';


export default class NavbarPerso extends Component {
    render() {
        return (
            <div className="navbar-container">
                <PopoverPopupState/>
                <div>
                    <img className="img-action" src="https://svgsilh.com/svg_v2/154688.svg"/>
                    <p>Annuler action</p>
                </div>
                <div>
                    <img className="img-action" src="https://svgsilh.com/svg_v2/154688.svg"/>
                    <p>Refaire</p>
                </div>
                <div>
                    <img className="img-action" src="https://image.flaticon.com/icons/png/512/12/12100.png"/>
                    <p>Sauvgarder</p>
                </div>
                <div>
                    <img className="img-action" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7G5OBvBHMqwyE-BPxOrTwLD7n3ALz-pwus-HuxrnFdlEPcVX"/>
                    <p>Partager</p>
                </div>
                <div>
                    <img className="img-action" src="https://cdn2.iconfinder.com/data/icons/general-ui-icons/800/eye106-512.png"/>
                    <p>Aperçu</p>
                </div>
                <div className="btn">
                    <button className="bottom">
                        <p>Ajouter au panier</p>
                    </button>
                </div>

            </div>
        )
    }
}
