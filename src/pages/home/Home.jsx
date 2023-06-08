import React from 'react'
import Sider from '../../components/sider/Sider'
import Userbar from '../../components/userbar/Userbar'
import { Toaster } from 'react-hot-toast'
import Topnav from '../../components/topbar/Topnav'

function Home() {

  return (
    <div className="main-wrapper">
      <Topnav />
      <div className="container">
          <div className="sider"><Sider /></div>
          <div className="section">
           <Userbar title="Home "/>
           
        </div>
    </div>
    </div>        
  )
}

export default Home
