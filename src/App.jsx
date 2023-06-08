import React, { useEffect, useState } from 'react'
import 'primereact/resources/primereact.min.css' 
import 'primereact/resources/themes/saga-green/theme.css'
import 'primeicons/primeicons.css' 
import 'primeflex/primeflex.css' 
import MainNav from './navigation/MainNav'
import { BrowserRouter as Router } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useGlobalContextHook } from './hook/useGlobalContextHook'


function App() {
  const [ isUserLoggedIn, setIsUserLoggedIn] = useState(null)
  const { dispatch } = useGlobalContextHook()

  useEffect(() => {

  },[])

  return (
        <Router>
          <MainNav />
            <Toaster  position='bottom-center' duration="5000" />
        </Router>

  )
}

export default App
