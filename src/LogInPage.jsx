import React, { useContext, useState } from 'react'
import { AuthContext } from './App';
import { UserData } from './App';
export default function ProfileData() {

  const [userInput,setUserInput]=useState(null);
  const[userPassword,setUserPassword]=useState(null);
  const {authentication , setAuthentication} = useContext(AuthContext);
  const {userInfo,setUserInfo}=useContext(UserData)

  const login=()=>
 {
  if(userPassword=== "1234" )
  {
    setUserInfo(userInput);
    
    setAuthentication(true)
    localStorage.setItem("authentication", true)
  }
  else
  {
    window.alert("Wrong password Try Again");
  }
}
  return (
    <div className='flex mt-28 bg-gray-300 border-black border-2'>
    <form className=''>
        <div className='mt-10 sm:px-56 md:px-96'>
        <label>UserName: </label>
        <input id='UserName' className='border-black border 2 rounded-lg'  type='text' onChange={(e)=>setUserInput(e.target.value)} /> <br/>
        </div>
        <div className='mt-8 sm:px-56 md:px-96'>
        <label>Password: </label>
        <input id='Password' className='border-black border 2 rounded-lg' onChange={(e)=>setUserPassword(e.target.value)} type='password'/>
        </div>
        <br/><br/>
        <div className='px-64 mb-4 md:px-96'>
        <button className='bg-blue-500 rounded-md w-20  ' onClick={login} type='button'> Submit</button>
        </div>
    </form>  
    </div>
  )
}
