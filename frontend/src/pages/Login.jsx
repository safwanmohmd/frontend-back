import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
const handleSubmit = async(e)=>{
    e.preventDefault()
    const res = await axios.post("http://localhost:3000/users/login",{
        username,
        password
    })
    if(res.data.error){
        return alert(res.data.error)
    }

    if(res.data.token){
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('role', res.data.role)
        
        alert(res.data.message)
        navigate('/dashboard')

    }
   
}
  return (
    <div>
        <form action="">
            <h1>login</h1>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='enter username'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='enter password'/>
            <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Login