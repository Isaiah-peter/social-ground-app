import React, { useState } from 'react'
import "./rightbar.scss"
import Icon from "../../img/index"



const RightBar = () => {
  const {Cancel, Search} = Icon()

  const [openSearch, setOpenSearch] = useState(false)
  return (
    <div className="online-user-container">
        <div className="search-bar">
          <div className="cancel-icon" style={{display: `${!openSearch ? "flex" : "none"}`}} onClick={()=>setOpenSearch(!openSearch)} ><Search /></div>
          <div className="search-friends" style={{display: `${openSearch ? "flex" : "none"}`}} >
           <Search className="search-icon" />
           <input type="text" className="form-control" placeholder= "find friends" />
           <Cancel className="search-icon cancel" onClick={()=>setOpenSearch(!openSearch)} /> 
          </div>
        </div>
        <div className="online-users">

        </div>
        <div className="ofline-user-users"></div>
    </div>
  )
}

export default RightBar