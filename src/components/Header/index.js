// Write your code here\
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => {
  return (
    <nav className="nav-bg">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo-img"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="trigger-bg">
              <li className="first">
                <AiFillHome />
                <Link to="/" className="trigger-head" onClick={() => close()}>
                  Home
                </Link>
              </li>
              <li className="first">
                <BsInfoCircleFill />
                <Link
                  to="/about"
                  className="trigger-head"
                  onClick={() => close()}
                >
                  About
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </nav>
  )
}

export default withRouter(Header)
