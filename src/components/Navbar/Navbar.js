import React from 'react'
import './Navbar.css'
let navbar=[{
item:'Accueil'
},
{
    item:'Personnaliser'
},
{
    item:'Nouveautés'
},
{
    item:'Contactez-nous'
}]
function Navbar(){
    return(
        <div className="navbar-container">
        {navbar.map((el,i)=>(
            <a className="ahref" href="#">{el.item}</a>
        ))}
        </div>
        
    )
}
export default Navbar