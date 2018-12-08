import React from 'react';
import NavbarComp from './Navbar';
import FooterComp from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram)

export default (props) => {
    return (
      <div>
        <NavbarComp />
          <div className="content">
          { props.children }
          </div>
        <FooterComp />
      </div>
    )
}
