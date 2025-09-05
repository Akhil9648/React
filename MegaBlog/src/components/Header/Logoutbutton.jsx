import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import Authservice from '../../appwrite/auth'
function Logoutbutton() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        Authservice.logout().then(()=>{
            dispatch(logout()) 
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default Logoutbutton