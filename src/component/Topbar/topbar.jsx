import React, { useState } from 'react'
import "./topbar.scss"
import Icons from "../../img/index"
import "lazysizes"

const Topbar = () => {
  const {Home, UserIcon, Setting, HelpIcon, LogoutIcon , MooonIcon,Search, Addfriend, Notification, ChatIcon, MaxIcon, EditSvg, DotMenu} = Icons()
  const [isOpenRequest, setIOpenRequest] = useState(false)
  const [isOpenChat, setIOpenChat] = useState(false)
  const [isOpenNot, setIOpenNot] = useState(false)
  const [isOpenUserDet, setIOpenUserDet] = useState(false)

  const openReqest = () => {
    setIOpenRequest(!isOpenRequest)
    setIOpenChat(false)
    setIOpenNot(false)
    setIOpenUserDet(false)
  }
  const openNot = () => {
    setIOpenNot(!isOpenNot)
    setIOpenChat(false)
    setIOpenRequest(false)
    setIOpenUserDet(false)
  }
  const openChat = () => {
    setIOpenChat(!isOpenChat)
    setIOpenRequest(false)
    setIOpenNot(false)
    setIOpenUserDet(false)
  }

  const openUserDet = () => {
    setIOpenUserDet(!isOpenUserDet)
    setIOpenRequest(false)
    setIOpenNot(false)
    setIOpenChat(false)
  }

  return (
    <header className="position-fixed fixed-top">
      <div className="container-fluid custom-padding ">
        <div className="header-section">
          <div className="header-left">
            <a href="#" className="header-logo">Socialground</a>
            <div className="search-box">
              <Search stroke="#fff" className="icon" />
              <input type="text" className="form-control search-input" placeholder="find friends" />
            </div>
            <ul className="btn-group">
                <li className="header-btn home-btn">
                  <a href="#" className='main-link'>
                    <Home />
                  </a>
                </li>
                <li className="header-btn custom-dropdown dropdown-lg add-friend">
                  <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={openReqest} >
                    <Addfriend />
                  </a>

                  <div className="dropdown-menu" style={isOpenRequest ? {display: `${isOpenRequest ? "block": "none"}`, position: "absolute", margin:0 , transform: "translate(0,  20px)", inset: "0px auto auto 0px"} : {}} >
                    <div className="dropdown-header">
                      <span>friends request</span>
                      <div className="mobile-close">
                        <h5>close</h5>
                      </div>
                    </div>
                    <div className="dropdown-content">
                      <ul className="friend-list">
                        <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">Isaiah</h5>
                                <h6>1 mutaul friend</h6>
                              </div>
                            </div>
                          </div>
                          <div className="action-btn">
                          <button type="button" class="btn btn-solid">confirm</button>
                          <button type="button" class="btn btn-outline ms-1">delete</button>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">Isaiah</h5>
                                <h6>1 mutaul friend</h6>
                              </div>
                            </div>
                          </div>
                          <div className="action-btn">
                          <button type="button" class="btn btn-solid">confirm</button>
                          <button type="button" class="btn btn-outline ms-1">delete</button>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">Isaiah</h5>
                                <h6>1 mutaul friend</h6>
                              </div>
                            </div>
                          </div>
                          <div className="action-btn">
                          <button type="button" class="btn btn-solid">confirm</button>
                          <button type="button" class="btn btn-outline ms-1">delete</button>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">Isaiah</h5>
                                <h6>1 mutaul friend</h6>
                              </div>
                            </div>
                          </div>
                          <div className="action-btn">
                          <button type="button" class="btn btn-solid">confirm</button>
                          <button type="button" class="btn btn-outline ms-1">delete</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
          <div className="header-right">
            <div className="post-stat">
              <ul>
                <li>
                  <a href="#">
                    <h3>3456</h3>
                    <span>Total post</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>3456</h3>
                    <span>Total friend</span>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="option-list">
            <li className="header-btn custom-dropdown dropleft btn-group dropdown-lg chat">
                  <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={openChat} >
                    <ChatIcon />
                    <span className="count success">2</span>
                  </a>

                  <div className="dropdown-menu dropdown-menu-right" style={isOpenChat ? {display: `${isOpenChat ? "block": "none"}`, position: "absolute", margin:0 , transform: "translate(-306px,  20px)", inset: "0px auto auto 0px"} : {}} >
                    <div className="dropdown-header">
                      <span>message</span>
                      <div className="right-option">
                        <ul>
                          <li>
                            <a href="#"><MaxIcon /> </a>
                          </li>
                          <li>
                            <a href="#"><EditSvg /> </a>
                          </li>
                          <li>
                            <a href="#"><DotMenu /> </a>
                          </li>
                        </ul>
                        <div className="mobile-close">close</div>
                      </div>
                    </div>
                    <div className="search-bar input-style left-icon">
                      <Search  className="icon"/>
                      <input type="text" className="form-control" placeholder="Search Messages" />
                    </div>
                    <div className="dropdown-content">
                      <ul className="friend-list">
                        <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">Isaiah</h5>
                                <h6>hello ! how are you ?</h6>
                              </div>
                            </div>
                          </div>
                          <div className="active-status">
                            <span className="active"></span>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">Isaiah</h5>
                                <h6>hello ! how are you ?</h6>
                              </div>
                            </div>
                          </div>
                          <div className="active-status">
                            <span className="active"></span>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">Isaiah</h5>
                                <h6>hello ! how are you ?</h6>
                              </div>
                            </div>
                          </div>
                          <div className="active-status">
                            <span className="offline"></span>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">Isaiah</h5>
                                <h6>hello ! how are you ?</h6>
                              </div>
                            </div>
                          </div>
                          <div className="active-status">
                            <span className="offline"></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
            </li>
            <li className='header-btn custom-dropdown dropleft btn-group dropdown-lg chat'>
              <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                <MooonIcon stroke="#fff" />
              </a>
            </li>
            <li className="header-btn custom-dropdown dropleft btn-group dropdown-lg notification">
                  <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={openNot} >
                    <Notification stroke="#fff" />
                    <span className="count warning">2</span>
                  </a>

                  <div className="dropdown-menu dropdown-menu-right" style={isOpenNot ? {display: `${isOpenNot ? "block": "none"}`, position: "absolute", margin:0 , transform: "translate(-306px,  20px)", inset: "0px auto auto 0px"} : {}} >
                    <div className="dropdown-header">
                      <span>Notification</span>
                    </div>
                    <div className="dropdown-content">
                      <ul className="friend-list">
                      <li>
                          <div className="media">
                            <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                            <div className="media-body">
                              <div>
                                <h5 className="mt-0">
                                  <span>Isaiah</span>{" "}
                                  Send you a friend request
                                </h5>
                                <h6>8 hour ago</h6>
                              </div>
                            </div>
                          </div>
                      </li>
                      <li>
                        <div className="media">
                          <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                          <div className="media-body">
                            <div>
                              <h5 className="mt-0">
                                <span>Isaiah</span>{" "}
                                Send you a friend request
                              </h5>
                              <h6>8 hour ago</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                          <div className="media-body">
                            <div>
                              <h5 className="mt-0">
                                <span>Isaiah</span>{" "}
                                Send you a friend request
                              </h5>
                              <h6>8 hour ago</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" data-src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/5.jpg" alt="user" className='lazyload' />
                          <div className="media-body">
                            <div>
                              <h5 className="mt-0">
                                <span>Isaiah</span>{" "}
                                Send you a friend request
                              </h5>
                              <h6>8 hour ago</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      </ul>
                    </div>
                  </div>
            </li>
            <li className='header-btn custom-dropdown profile-btn dropleft btn-group dropdown-lg chat'>
              <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={openUserDet} >
                <div className="media d-sm-flex">
                  <div className="user-img bg-size blur-up lazyloaded" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/1.jpg')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", display: "block"}} >
                    <span className="available-online online"></span>
                  </div>
                  <div class="media-body">
                    <h4>Josephin water</h4>
                    <span>active now</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={isOpenUserDet ? {display: `${isOpenUserDet ? "block": "none"}`, position: "absolute", margin:0 , transform: "translate(-78px,  40px)", inset: "0px auto auto 0px"} : {}} >
                    <div className="dropdown-header">
                      <span>profile</span>
                    </div>
                    <div className="dropdown-content">
                      <ul className="friend-list">
                      <li>
                        <a href='#'>
                          <div className="media">
                            <UserIcon stroke="#647589" />
                            <div class="media-body">
                              <div>
                                <h5 class="mt-0">Profile</h5>
                                <h6>Profile preview &amp; settings</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div className="media">
                            <Setting stroke="#647589" />
                            <div class="media-body">
                              <div>
                                <h5 class="mt-0">setting &amp; privacy</h5>
                                <h6>all settings &amp; privacy</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="media">
                            <HelpIcon stroke="#647589" />
                            <div class="media-body">
                              <div>
                                <h5 class="mt-0">help &amp; support</h5>
                                <h6>browse help here</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <div className="media">
                            <LogoutIcon stroke="#647589" />
                            <div class="media-body">
                              <div>
                                <h5 class="mt-0">log out</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      </ul>
                    </div>
                  </div>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar