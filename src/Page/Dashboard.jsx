 
import React, { useContext, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import ChatArea from '../Components/ChatArea';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {

  const {user} = useContext(AuthContext);

  const [selectedRecipient, setSelectedRecipient] = useState(user.id); // Default recipient
    
  const handleRecipientSelect = (userId) => {
      setSelectedRecipient(userId);
  };

  return (
  <div className='w-full h-screen flex'>
   <Sidebar onSelectRecipient={handleRecipientSelect}></Sidebar>
   <ChatArea recipientId={selectedRecipient}></ChatArea>
   
   
  </div>
  );
};

export default Dashboard;