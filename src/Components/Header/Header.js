import React, { useContext, useEffect } from 'react'
import Olxlogo from '../../Assets/Olxlogo'
import SearchIcon from '../../Assets/SearchIcon'
import Arrow from '../../Assets/Arrow'
import SellButton from '../../Assets/SellButton'
import SellPlus from '../../Assets/SellPlus'
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext'
import { useNavigate } from 'react-router-dom'

function Header() {
  const {user,setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    const auth = firebase.getAuth()
    firebase.onAuthStateChanged(auth,(user)=>{
      if(user){
          setUser(user)
      }else{
          console.log("Not logged");
      }
  })

  },[firebase,setUser])

 const handleLogout = ()=>{
  const auth = firebase.getAuth()
  firebase.signOut(auth)
  .then(()=>{
    console.log('Logout success');
    setUser(null)
    navigate('/')
  })
  .catch((err)=>{
    console.log(err.message);
  })
 }

  return (
    <div className='h-[10vh]  flex items-center px-4 bg-[#f3f3f3] w-[100%] shadow-md fixed z-10'>
      <div className='h-[100%] flex items-center w-[100%] justify-around md:justify-between '>
        <div className='h-[40%]'>
          <Olxlogo/>
        </div>
        <div className='h-[100%] w-[18%] hidden xl:flex items-center relative'>
        <SearchIcon styling={'left-4'}/>
        <input type="text" placeholder='Search City, Area or Location' className='w-[100%] border-2 rounded border-[#002F34] h-[70%] px-11' />
        <Arrow styling={'right-4'}/>
        </div>
        <div className='h-[100%] w-[20%] lg:w-[50%] flex items-center relative'>
        <input type="text" placeholder='Find Cars, Mobile Phones and more...' className='w-[100%] border-2 rounded border-[#002F34] h-[70%] px-6' />
        <SearchIcon styling={'right-0  rounded-r bg-[#002F34] text-white h-[70%] w-12 flex items-center justify-center'}/>
        </div>
        <div className='h-[100%] relative hidden w-[6%] md:flex items-center'>
          <span className='font-semibold'>ENGLISH</span>
          <Arrow styling={'right-0'}/>
        </div >
        <div className='h-[100%] relative w-[15%] md:w-[4%] flex flex-col items-center justify-center'>
          <span className='font-semibold cursor-pointer'onClick={()=>user ? handleLogout : navigate('/login')}>{user? user.displayName :'Login'}</span>
          {user && <span  className='font-semibold cursor-pointer text-xs' onClick={handleLogout}>LOGOUT</span>}
        </div>
        <div className='h-[100%] relative w-[15%] md:w-[7%]  flex items-center justify-center'>
          <SellButton/>
          <SellPlus styling={'xl:left-4'}/>
        </div>
      </div>
    </div>
  )
}

export default Header
