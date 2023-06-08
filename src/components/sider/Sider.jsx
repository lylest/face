import React from 'react'
import MenuItem from '../menuitem/MenuItem'
import './sider.css'
import { menulist} from './menulist'
import logo from '../../assets/logo.png'
import { Divider } from 'primereact/divider'
import { InputSwitch } from 'primereact/inputswitch'
import { useSiderHook } from './useSiderHook'
import { useGlobalContextHook } from '../../hook/useGlobalContextHook'
import MenuIcon from '../menuitem/MenuIcon'


        
function Sider() {
  const { currentUser, currentPlaying } = useGlobalContextHook()
  const  roleId  = 1
  const { toggleTheme, checked } = useSiderHook()


  return (
    <div className="sider-wrapper">
      <div className="logo-wrapper">
       <div className="logo-rounded"> <img src={logo} alt="logo" loading="lazy" /></div>
        <h2>ATTENDANCE SYSTEM</h2>
      </div>
  
  { roleId === 2 ?
    <>
       {
        menulist.creator.menu.map((item, index) => (
          item.name === "space" ? <Divider /> :
          item.name === "Notifications"  ?
          <MenuItem  title={item.name} key={item.path} path_name={item.path} Icon={item.icon} rightTitle={unReadNotification.length}/> :
          <MenuItem  title={item.name} key={item.path} path_name={item.path} Icon={item.icon}/>
        ))
      }
    </> : 
    roleId === 1 ? 
    <>
           {
        menulist.admin.menu.map((item, index) => (
          item.name === "space" ? <Divider /> :
          <MenuItem  title={item.name} key={item.path} path_name={item.path} Icon={item.icon}/>
        ))
      } 
    </> : null

   }

   { /*<div className="switch">
      <InputSwitch checked={checked} onChange={(e) => toggleTheme(e.value)} />
      <h3>Switch theme</h3>
    </div> */}

    </div>
  )
}

export default Sider
