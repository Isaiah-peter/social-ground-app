import React from 'react'
import "./topbar.scss"
import Icons from "../img/index"

const Topbar = () => {
  let {Home, Search, Addfriend} = Icons()
  return (
    <header>
      <div className="container-fluid custom-padding">
        <div className="header-section">
          <div className="header-left">
            <a href="#" className="header-logo">Socialground</a>
            <div className="search-box">
              <img src={Search} alt="search" className="icon" />
              <input type="text" className="form-control search-input" placeholder="find friends" />
            </div>
            <ul className="btn-group">
                <li className="header-btn home-btn">
                  <a href="#" className='main-link'>
                    <img src={Home} alt="icon" />
                  </a>
                </li>
                <li className="header-btn custom-dropdown dropdown-lg add-friend">
                  <a>
                    <img src={Addfriend} alt="icon" />
                  </a>
                </li>
              </ul>
          </div>
          <div className="header-right"></div>
        </div>
      </div>
    </header>
  )
}

export default Topbar