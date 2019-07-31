import React from "react";
import {Link,Route} from 'react-router-dom';
import Search from "./components/Search/Search";
import LienInscription from "./components/LienInscription/LienInscription";
import LienPanier from "./components/LienPanier/LienPanier";
import VerticalTabs from "./components/SubMenu/SubMenu";
import CenteredTabs from "./components/CenteredTabs/CenteredTabs"
import Slider from "./components/Slider/Slider"
import ImgMediaCard from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer";
import Personnaliser from './Pages/personnaliser';
import Accueil from "./Pages/accueil";
import{navbar,tabProduits,tabMotif} from './data'
import Panier from "./Pages/panier";

import "./App.css";



function App() {
  return (
    <div>
      <div className="info-container">
        {navbar.map((el, i) => (
          <div className="info">
            <img className="img-info" src={el.image} />
            <a className="information" href="#">
              {el.item}
            </a>
          </div>
        ))}
      </div>

      <div className="app">
        <header>
          <div className="header">
            <img
              className="img-logo"
              src="http://pluspng.com/img-png/png-style-file-style-network-2012-logo-png-400.png"
            />
            <Search />
            <LienInscription />
            <LienPanier />
          </div>
          <div className="category-nav">
          <CenteredTabs/>
          </div>
        </header>
       <main>
      <Route exact path="/"  render={()=> <Accueil tabProduits={tabProduits} />}/>
      <Route exact path="/personnaliser" render={()=> <Personnaliser tabMotif={tabMotif} />}/>
      <Route exact path="/panier" render={()=> <Panier/> } />
      {/* <Panier/> */}
      </main>
      </div>
        <footer>
          <Footer/>
        </footer>
        
    </div>
  );
}

export default App;
