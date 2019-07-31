import React, { Component } from 'react'
import './Motif.css';

export default function Motif(props){
    return(
        <div className="motif-container">
            {props.tabMotif.map((el,i)=>
            <div>
                <img className="img-motif" src={el.image}/>
            </div>
                )}
        </div>
    )
}
