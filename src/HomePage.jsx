import React, { useContext } from 'react';
import { UserData } from './App';

export default function HomePage() {
    const {userInfo}=useContext(UserData)
  return (
    <div className='sm:mt-4 ml-4'>
      <h1>Hi! Welcome {userInfo} </h1>
    </div>
  );
}
