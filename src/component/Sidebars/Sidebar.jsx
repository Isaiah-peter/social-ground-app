import React from 'react'
import Icon from "../../img/index"
import "./sidebar.scss"
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Sidebar = () => {
    const {MenuIcon, Newfeed, Favorite, Group, Music, Weather}  = Icon()

    tippy(".newfeed", {
        arrow: true,
        placement: "right",
        animation: 'fade',
        interactive: true,
        theme: 'light',
    })
  return (
    <div className="sidepanel">
        <div className="main">
            <a href="#">
                <MenuIcon stroke="#fff"  />
            </a>
        </div>
        <ul className="sidepanel-content">
            <li data-tippy-content="NewFeed" className = "newfeed" >
                <a href="#">
                    <Newfeed stroke="#fff" />
                </a>
            </li>
            <li data-tippy-content="favorite" id = "newfeed"  >
                <a href="#">
                    <Favorite stroke="#fff" />
                </a>
            </li>
            <li data-tippy-content="Group">
                <a href="#">
                    <Group stroke="#fff" />
                </a>
            </li>
            <li data-tippy-content="music" id = "newfeed" >
                <a href="#">
                    <Music stroke="#fff" />
                </a>
            </li>
            <li data-tippy-content="weather" id = "newfeed" >
                <a href="#">
                    <Weather stroke="#fff" />
                </a>
            </li>
        </ul>
        <div className="main main-bottom"></div>
    </div>
  )
}

export default Sidebar