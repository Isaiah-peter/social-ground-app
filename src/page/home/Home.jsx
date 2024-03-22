import React from 'react'
import RightBar from '../../component/Sidebars/RightBar';
import Sidebar from '../../component/Sidebars/Sidebar';
import Topbar from '../../component/Topbar/topbar';

import '../../App.scss';

const Home = () => {
  return (
    <div className="container-fluid panel-body custom-body">
        <Topbar />
        <Sidebar />
        <RightBar />
    </div>
  )
}

export default Home