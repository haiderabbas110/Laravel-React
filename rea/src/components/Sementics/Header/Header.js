import React from "react"
import Image from "react-bootstrap/Image";
//import logo from './public/assets/header/logo.jpg';
import { public_server} from "../../../Constants";


function Header(){
    const axios = require('axios');
    
    if(window.location.pathname === "/login"){
        return null
    }
    return (
      <header className="geneHeader">
          
          <section className="leftHeadingSection">
          <Image src="http://intranet.genetech.pk/intranet/assets/images/red_logo.jpg" fluid />






          </section>
          <section className="rightHeadingSection">
              


          </section>
          
      </header>
        )
    }
export default Header;