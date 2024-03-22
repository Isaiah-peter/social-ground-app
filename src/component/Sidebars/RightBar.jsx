import React, { useState } from 'react'
import "./rightbar.scss"
import Icon from "../../img/index"
import ChatBox from "../FloatMenssenger/FloatMenssenger"



const RightBar = () => {
  const {Cancel, Search} = Icon()
  const [remove, setRemove] = useState(false)
  const [id, setId] = useState(1)

  const handleChat = (id) => {
    setId(id)
    setRemove(!remove)

  }

  console.log(id)

  const [openSearch, setOpenSearch] = useState(false)
  return (
    <div className="online-user-container">
        <div className="search-bar">
          <div className="cancel-icon" style={{display: `${!openSearch ? "flex" : "none"}`}} onClick={()=>setOpenSearch(!openSearch)} ><Search /></div>
          <div className="search-friends" style={{display: `${openSearch ? "flex" : "none"}`, width: `${openSearch ? "250px":0}`}} >
           <Search className="search-icon" />
           <input type="text" className="form-control" placeholder= "find friends" />
           <Cancel className="search-icon cancel" onClick={()=>setOpenSearch(!openSearch)} /> 
          </div>
        </div>
        <div className="online-users">
          <ul>
            <li className="media">
              <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/1.jpg')"}} ></div>
            </li>
            <li className="media">
              <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
              <span className="online-color"></span>
            </li>
            <li className="media">
              <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
              <span className="online-color"></span>
            </li>
          </ul>
        </div>
        <div className="ofline-user-users">
        <ul>
          <li className="media" onClick={()=> handleChat(1)}>
            <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
            <span className="online-color"></span>
          </li>
          <li className="media" onClick={()=> handleChat(2)}>
            <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
            <span className="online-color"></span>
          </li>
          <li className="media">
            <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
            <span className="online-color"></span>
          </li>
          <li className="media">
            <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
            <span className="online-color"></span>
          </li>
          <li className="media">
            <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
            <span className="online-color"></span>
          </li>
          <li className="media">
            <div className="friends-image" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
            <span className="online-color"></span>
          </li>
        </ul>

        <ChatBox id={id} position={350} remove={remove} setRemove={setRemove} />
        </div>
    </div>
  )
}

export default RightBar