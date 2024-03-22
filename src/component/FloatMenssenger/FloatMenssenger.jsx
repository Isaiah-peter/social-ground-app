import React from 'react'
import "./FloatMenssenger.scss"

const FloatMenssenger = ({id, position, remove, setRemove}) => {
  console.log(remove)
  return (
    <div className="floatmessenger-container" style={{right: `${position}px`, display: `${remove ? "flex": "none"}`}}>
        <div className="top">
            <div className="userimage" style={{backgroundImage: "url('https://themes.pixelstrap.com/friendbook/assets/images/user-sm/2.jpg')"}} ></div>
            <h3 className="username">isaiah</h3>

            <div className="close" onClick={()=> setRemove(false)} >close</div>
        </div>
        <div className="center">
            <div className="msg-add">
              <p className="sentmessage">hi</p>
            </div>
            <div className="msg-add">
              <p className="receivemessage">hello</p>
            </div>
            <div className="msg-add">
              <p className="sentmessage">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dicta nesciunt explicabo quam eius repellat?</p>
            </div>
        </div>
        <div className="bottom">
            <input type="text" className="form-control" placeholder='message'/>
            <button className="sent">sent</button>
        </div>
    </div>
  )
}

export default FloatMenssenger