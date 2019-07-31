import React from 'react'
import Slider from "../../components/Slider/Slider";
import VerticalTabs from "../../components/SubMenu/SubMenu";
import ImgMediaCard from "../../components/Cards/Cards";

export default function Accueil({tabProduits}) {
    return (
        <div>
            
          <Slider/>
          <VerticalTabs/>   
          <ImgMediaCard tabProduits={tabProduits}/>
          
        </div>
    )
}
