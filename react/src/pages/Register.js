import {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'

function Register() {
    const [username, setUsername] =useState("") 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const {register } = useContext(AuthContext)


    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log("Register was called")
      register(username, email, password);
    }

  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
       <div className={`${username?"bg-red-200":"bg-red-700"}  rounded-lg p-5`}>
          <h1 className='my-3'>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setEmail(e.target.value)} className='rounded mt-2 px-3 py-1' placeholder='Enter Email ' /><br/>
            <input type="text" onChange={e => setUsername(e.target.value)} className='rounded mt-2 px-3 py-1' placeholder='Create Username ' /><br/>
            <input type="password" onChange={e => setPassword(e.target.value)} className='rounded mt-2 px-3 py-1' placeholder='Create Password ' /><br/>
            <div className='flex justify-center'>
                <button className='px-3 py-1 bg-red-600 rounded-full mt-2 text-black '>
                  Register
                </button>
            </div>
          </form>

        </div> 
    </div>
  )
}

export default Register