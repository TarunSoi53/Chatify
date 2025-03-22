import React from 'react';
import MainSideBar from '../components/MainSideBar';
import Chat from '../components/Chat';

function Home() {
  return (
    <div className='flex h-screen w-full  '>
    <MainSideBar/>
    <Chat/>
    </div>
  );
}

export default Home;
