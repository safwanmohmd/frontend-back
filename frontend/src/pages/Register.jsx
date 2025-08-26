import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
const handleSubmit = async(e)=>{
    e.preventDefault()
    const res = await axios.post("http://localhost:3000/users/create",{
        username,
        password
    })
    alert(res.data.message)
}
  return (
    <div>
        <form action="">
            <h1>register new account</h1>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='enter username'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='enter password'/>
            <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Register