import React, { useState,useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext,FirebaseContext } from '../../store/FirebaseContext'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const navigate = useNavigate()
    const {firebase} = useContext(FirebaseContext)
    const {setUser} = useContext(AuthContext)



    const handleLogin = ()=>{
        const auth = firebase.getAuth()
        firebase.signInWithEmailAndPassword(auth,email,password)
        .then((userData)=>{
            navigate('/',{replace:true})
        })
        .catch(err=>{
            console.log(err.code);
            if(err.code === 'auth/invalid-credential'){
                setError('Invalid Credentials.')
            }
        })
        firebase.onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }else{
                console.log("Not logged");
            }
        })
    }

    return (
        <div className='flex min-h-[100vh] h-[100%] w-[100%] items-center justify-center'>
          <div className='border-2 border-black h-[65%] w-[20vw] p-8'>
                <div className='h-28 pt-4 flex items-center justify-center'>
                    <img src="/images/OLX-Symbol.png" className='h-[80%]' alt="" />
                </div>
                <div className='flex flex-col my-3'>
                    <label>Email</label>
                    <input type="text" placeholder='Enter your e-mail' value={email} onChange={(e)=>setEmail(e.target.value)} className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
                </div>
                <div className='flex flex-col my-3'>
                    <label>Password</label>
                    <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
                </div>
                {error && <p className='text-xs text-[#ff3939]'>{error}</p>}
                <div className='flex flex-col my-3'>
                    <button onClick={handleLogin} className='border-2 my-2 bg-[#002f34] text-white py-2 font-bold tracking-widest transition ease-in-out delay-350  hover:bg-white hover:text-[#002F34] hover:border-2 hover:border-[#002F34]'>LOGIN</button>
                    <button onClick={()=>navigate('/signup')} className='font-semibold tracking-wide'>SIGNUP</button>
                </div>
          </div>
        </div>
      )
}

export default Login
