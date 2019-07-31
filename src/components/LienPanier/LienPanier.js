import React from 'react'
import { Link } from 'react-router-dom';
import './LienPanier.css' 
import {connect} from "react-redux"
import Badge from '@material-ui/core/Badge';
function LienPanier(props){
    return(
        <div className="top-container-p">
            <Link to="/panier">
            <Badge  badgeContent={props.count.length} color="primary">
                <img className="img" src="https://www.naturalizer.ca/Assets/naturalizerca/Images/hero-shopping-cart.png"/>
                </Badge>
                </Link>
            <p className="parag">"0" DT</p>

        </div>
    )
}

const mapStateToProps=(state)=>({
    count : state.addedItems
})
export default connect(mapStateToProps)(LienPanier)