import React from "react";
import { Route, Link } from "react-router-dom";
import NavbarPerso from "../../components/NavbarPerso/NavbarPerso";
import NavbarPersDesign from "../../components/NavbarPersDesign/NavbarPersDesign";
import Produits from "../../components/ProduitPersonnaliser/Produits";
import Motif from "../../components/Motif/Motif";
export default class Personnaliser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produits: true
    };
  }

  toggleDisplay = (produits) => {
    this.setState({
      produits
    });
  };
  render() {
    const { tabMotif } = this.props;
    const { produits } = this.state;
    return (
      <div>
        <NavbarPerso />
        <NavbarPersDesign toggleDisplay={this.toggleDisplay}/>
        {produits ? <Produits /> : <Motif tabMotif={tabMotif} />}
      </div>
    );
  }
}
