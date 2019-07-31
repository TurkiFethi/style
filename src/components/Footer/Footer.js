import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div>
                    <p>PROGRAMMES</p>
                    <a className="ahref-footer" href="#">Programme de fidilité</a>
                </div>
                <div className="information-footer">
                    <p>INFORMATION</p>
                    <a className="ahref-footer" href="#">Réglage de retour</a>
                    <a className="ahref-footer" href="#">Protection de données</a>
                    <a className="ahref-footer" href="#">Nous contacter</a>
                </div>
                <div className="width-follow">
                    <p>FOLLOW US</p>
                    <div className="follow-us-container">
                    <a href="#"><img className="img-fb" src="https://cdn.icon-icons.com/icons2/1099/PNG/512/1485482214-facebook_78681.png"/></a>
                    <a href="#"><img className="img-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/480px-Instagram_icon.png"/></a>
                    <a href="#"><img className="img-twitter" src="http://pngimg.com/uploads/twitter/twitter_PNG29.png"/></a>
                    </div>
                </div>
                <div>
                    <p>LIVRAISON</p>
                    <a href="#"><img src="https://269836-837130-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/06/24h-72h-icon.png"/></a>
                </div>

            </div>
        )
    }
}
