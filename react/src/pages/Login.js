import {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {login} = useContext(AuthContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("I love this")
        login(username, password)
    }

  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
       <div className={`bg-gray-400 rounded-lg p-5`}>
          <h1 className='my-3'>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setUsername(e.target.value)} className='rounded mt-2 px-3 py-1' placeholder='Enter username ' /><br/>
            <input type="password" onChange={e => setPassword(e.target.value)} className='rounded mt-2 px-3 py-1' placeholder='Enter Password ' /><br/>
            <div className='flex justify-center'>
                <button disabled={!username || !password} className='bg-red-600 rounded-full mt-2 text-black px-3 py-1'>Login</button>
            </div>
          </form>

        </div> 
    </div>
  )
}

export default Login
