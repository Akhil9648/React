import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Protected({children,authentitation}) {
    const navigate=useNavigate();
    const [loader,setLoader]=useState(true);
    const authStatus=useSelector((state)=>state.auth.authStatus)
    useEffect(()=>{
        if(authentitation && authStatus !== authentitation){
            navigate('/login')
        } else if(!authentitation && authStatus !== authentitation){
            navigate('/')
        }
        setLoader(false)
    },[authStatus,navigate,authentitation])
  return loader?<h1>Loading...</h1> : <>{children}</>
}
