import React from 'react'
import './userbar.css'
import { useNavigate, Link } from 'react-router-dom'
import { useGlobalContextHook } from '../../hook/useGlobalContextHook'
import { MdNotificationsNone }from 'react-icons/md'
import { Badge } from 'primereact/badge'

function Userbar({title}) {
  const { currentUser, dispatch } = useGlobalContextHook()
  const navigate = useNavigate()
  const userImg =  'https://picsum.photos/id/237/200/300'



  const logout =async()=>{
     try {
        await localStorage.clear() 
        dispatch({type:'SET_CURRENT_USER', payload:null})

        setTimeout(()=>{
          window.location.reload()
        },1000)

        navigate('/')
     } catch(err){
    }
  }

  return (
    <div className="top-bar-wrapper">
    <h3 style={{ padding: '20px 15px 15px 30px' }}>{title}</h3>
    <div className='far-container' id="far-container">
        <div className='badge-box'>
           <Badge value={2} severity="success"  className='dot'/>
             <Link to='/notification'>
              <MdNotificationsNone  color="#666" size={40}  className='bell'/>
              </Link>
         </div>

         <div className='usernames'>
          <h4>{ "name" }</h4>
          <p>{ "role"} </p>
         </div>
           <div className='user-circle' id='touchable' onClick={() => navigate('/profile')}>
                <img src={userImg} loading="lazy" className='user-small-profile-photo' />
             </div>
        </div>
</div>
  )
}

export default Userbar