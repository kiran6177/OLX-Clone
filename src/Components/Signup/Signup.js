import React, { useContext, useReducer} from 'react'
import { FirebaseContext } from '../../store/FirebaseContext';
import {useNavigate} from 'react-router-dom'
import signupReducer from './SignupReducer';

function Signup() {
    // const [username,setUsername] = useState('');
    // const [email,setEmail] = useState('');
    // const [mobile,setMobile] = useState('');
    // const [password,setPassword] = useState('');
    // const [error,setError] = useState('');

    const [state,dispatch] = useReducer(signupReducer,{username:'',email:'',mobile:'',password:'',error:''})
    
    const navigate = useNavigate()
    const {firebase,firestore,db} = useContext(FirebaseContext)

    const handleSignup = ()=>{

        const auth = firebase.getAuth()
        firebase.createUserWithEmailAndPassword(auth,state.email,state.password).then(async(result)=>{
            try{
            firebase.updateProfile(auth.currentUser,{displayName:state.username})
            await firestore.setDoc(firestore.doc(db,'users',result.user.uid),{
                id:result.user.uid,
                username:state.username,
                mobile:state.mobile
            })
                navigate('/login',{replace:true})
            }
            catch(err){
                console.log(err.message);
            }
        })
        .catch(err=>{
            console.log(err.code);
            console.log(err.message);
            if(err.code === 'auth/invalid-email'){
                dispatch({type:'error',payload:"Invalid Email."})
            }
            if(err.code === 'auth/weak-password'){
                dispatch({type:'error',payload:'Password must be at least 6 characters.'})
            }
            if(err.code === 'auth/missing-email'){
                dispatch({type:'error',payload:'Please enter email.'})
            }
        })
    }

  return (
    <div className='flex min-h-[100vh] h-[100%] w-[100%] items-center justify-center'>
      <div className='border-2 border-black h-[75%] w-[20vw] p-8'>
            <div className='h-28 pt-4 flex items-center justify-center'>
                <img src="/images/OLX-Symbol.png" className='h-[80%]' alt="" />
            </div>
            <div className='flex flex-col my-3'>
                <label>Username</label>
                <input type="text" placeholder='Enter your username' value={state.username} onChange={(e)=>dispatch({type:'username',payload:e.target.value})} className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
            </div>
            <div className='flex flex-col my-3'>
                <label>Email</label>
                <input type="text" placeholder='Enter your e-mail' value={state.email} onChange={(e)=>dispatch({type:'email',payload:e.target.value})} className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
            </div>
            <div className='flex flex-col my-3'>
                <label>Mobile</label>
                <input type="number" placeholder='Enter your mobile number' value={state.mobile} onChange={(e)=>dispatch({type:'mobile',payload:e.target.value})} className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
            </div>
            <div className='flex flex-col my-3'>
                <label>Password</label>
                <input type="password" placeholder='Enter your password' value={state.password} onChange={(e)=>dispatch({type:'password',payload:e.target.value})} className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
            </div>
            {state.error && <p className='text-xs text-[#ff4646]'>{state.error}</p>}
            <div className='flex flex-col my-3'>
                <button onClick={handleSignup} className='border-2 my-2 bg-[#002f34] text-white py-2 font-bold tracking-widest transition ease-in-out delay-350  hover:bg-white hover:text-[#002F34] hover:border-2 hover:border-[#002F34]'>SIGNUP</button>
                <button onClick={()=>navigate('/login')}className='font-semibold tracking-wide'>LOGIN</button>
            </div>
      </div>
    </div>
  )
}

export default Signup
