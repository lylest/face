import React from 'react'
import Home from '../pages/home/Home'
import Students from '../pages/students/Students'
import { Routes, Route } from 'react-router-dom'

function UserNav() {
  return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/students"  element={<Students />} />
    </Routes>
  )
}

export default UserNav