import { useState, useEffect, useRef } from "react"
import Pusher from 'pusher-js'
import toast from 'react-hot-toast'

export const useStudentsHook =() => {
    const [students, setStudents] = useState([])

    const intiliazePusher = async () => {   
        try {
            var pusher = new Pusher("d094734ac229bdc81de3", {
                cluster: "ap2",
                channelAuthorization: {
                    endpoint: 'http:localhost:27017'
                  },
              })
        
              const channel1 = pusher.subscribe('someUniqueId')
                channel1.bind('my-event',function(data) {
                   listStudents()
            })
            
        } catch (err) {
            console.lo(err)
        } 
      }


    useEffect(() => {
        intiliazePusher()
    },[])

    useEffect(() => {
        listStudents()
    },[])

    const listStudents =async()=> {
        try {
            const response = await fetch("http://localhost:27017/read/students")
            const json = await response.json()

            if(response.ok) {
                setStudents(json)
            }

            if(!response.ok) {
                toast.error(json.message)
            }
        } catch (err) {
            console.log(err)
            toast.error("Error during listing students")
        }
    } 

    return {
        students,
    }
}