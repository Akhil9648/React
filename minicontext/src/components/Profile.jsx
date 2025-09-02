import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile(){
    const {user}=useContext(UserContext)
    if(!user) return <div>Please Login</div>
    return <div>Hello Dear {user.username} Welcome onboard</div>
}
export default Profile