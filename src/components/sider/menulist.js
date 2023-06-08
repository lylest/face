import { HiOutlineViewGrid } from 'react-icons/hi'
import { MdQueueMusic, MdMusicNote, MdPayment,MdNotifications } from "react-icons/md"
import { HiUser, HiUsers, HiDatabase} from 'react-icons/hi'
import { RiHomeSmile2Fill } from 'react-icons/ri'


export const menulist = {
    creator:{
        role:'creator',
        role_id: 2,
        menu:[
            {
                name:'Home',
                path:'/',
                icon:HiOutlineViewGrid
            },
            {
                name:'Album',
                path:"/albums",
                icon:MdQueueMusic
            },
            {
                name:'Music',
                path:"/musics",
                icon:MdMusicNote
            },
            {
                name:'space',
                path:"/",
                icon:null
            },
            {
                name:'Payment',
                path:"/payments",
                icon:MdPayment
            },
            {
                name:'Profile',
                path:"/profile",
                icon:HiUser
            },
            {
                name:'Notifications',
                path:"/notifications",
                icon:MdNotifications
            },
        ]
    },
    admin:{
        role:"admin",
        role_id: 1,
        menu:[
            {
                name:'Home',
                path:'/',
                icon:HiOutlineViewGrid
            },
            {
                name:'Students',
                path:"/students",
                icon:HiUsers
            },
            {
                name:'Attendances',
                path:"/musics",
                icon:HiDatabase
            },
            {
                name:'space',
                path:"/",
                icon:null
            },
            {
                name:'Profile',
                path:"/profile",
                icon:HiUser
            },
        ]
    },
    client:{
        role:"client",
        role_id: 3,
        menu:[
            {
                name:'Home',
                path:'/',
                icon: RiHomeSmile2Fill
            }
        ]
    }
}