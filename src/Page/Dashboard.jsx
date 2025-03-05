 
import React from 'react';
import Sidebar from '../Components/Sidebar';
import ChatArea from '../Components/ChatArea';

const Dashboard = () => {
  return (
  <div className='w-full h-screen flex'>
   <Sidebar></Sidebar>
   <ChatArea></ChatArea>
   
   
  </div>
  );
};

export default Dashboard;