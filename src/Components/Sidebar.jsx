// import { ChartArea, Dot, EllipsisVertical, Menu, MessageCircle, Phone, Search, UserRound, Video } from 'lucide-react';
// import React from 'react';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const Sidebar = () => {
//     return (
//         <div className='w-[530px] h-full border-[1px] border-slate-200'>
//             <div className='w-full h-20  border-b-[1px]  border-slate-200 px-3 flex justify-between items-center'>
//                 {/* this band name */}

//                 <div className='band-name flex justify-center items-center gap-2'>
//                     <img src="/public/vite.svg" alt="" />
//                     <h2>Quick Chat</h2>
//                 </div>
//                 <div className="dark-mode flex justify-center items-center gap-2">
//                     {/*  dark button */}
//                     <input type="checkbox" value="synthwave" className="toggle theme-controller" />
//                     <EllipsisVertical />
//                 </div>
//             </div>

//             {/*  tab option start */}

//             <Tabs className='  border-0'>
//     <TabList className=' flex justify-between items-center   px-5 py-5'>
//       <Tab className='focus:outline-none px-2 py-3 text-slate-500 font-extrabold cursor-pointer  flex gap-2'> <MessageCircle /> Chats</Tab>
//       <Tab className='focus:outline-none px-2 py-3  text-slate-500 font-extrabold cursor-pointer flex gap-2'><Phone /> Calls</Tab>
//       <Tab className='focus:outline-none px-2 py-3 text-slate-500 font-extrabold cursor-pointer flex gap-2'> <UserRound /> Contacts</Tab>
//     </TabList>
//       <hr className='text-slate-200' />
//     <div className='w-full flex justify-center relative'>
//     <Search className='scale-75 text-slate-500 absolute left-6 top-5' />
//     <input type="text" placeholder='Enter search' className='mt-3 mb-3 px-8 py-2 w-[90%] border-0 bg-slate-200 rounded-4xl  focus:outline-violet-600' />
//     </div>

//     <TabPanel>
//       <h2 className='text-sm font-bold text-slate-400 ml-5 uppercase'>Recent Chats</h2>
//       {/*  this is chart Section */}
//       <div className="chats overflow-auto custom-scrollbar h-[360px]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
//         {/* single chart section */}
//         <div className="single_chat bg-violet-100 cursor-pointer hover:bg-violet-300  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <span className='message text-[13px]'>How are you</span>
//           </div>
//          </div>

//           <div className='flex flex-col space-y-2'>
//             <span>10:35 pm</span>
//             <span className='w-5 h-5 rounded-full bg-violet-600 text-sm  text-white flex ml-10 justify-center items-center '>2</span>
//           </div>
//         </div>

//         <div className="single_chat bg-violet-100 cursor-pointer hover:bg-violet-300  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <span className='message text-[13px]'>How are you</span>
//           </div>
//          </div>

//           <div className='flex flex-col space-y-2'>
//             <span>10:35 pm</span>
//             <span className='w-5 h-5 rounded-full bg-violet-600 text-sm  text-white flex ml-10 justify-center items-center '>2</span>
//           </div>
//         </div>



//         <div className="single_chat bg-violet-100 cursor-pointer hover:bg-violet-300  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <span className='message text-[13px]'>How are you</span>
//           </div>
//          </div>

//           <div className='flex flex-col space-y-2'>
//             <span>10:35 pm</span>
//             <span className='w-5 h-5 rounded-full bg-violet-600 text-sm  text-white flex ml-10 justify-center items-center '>2</span>
//           </div>
//         </div>


//         <div className="single_chat bg-violet-100 cursor-pointer hover:bg-violet-300  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <span className='message text-[13px]'>How are you</span>
//           </div>
//          </div>

//           <div className='flex flex-col space-y-2'>
//             <span>10:35 pm</span>
//             <span className='w-5 h-5 rounded-full bg-violet-600 text-sm  text-white flex ml-10 justify-center items-center '>2</span>
//           </div>
//         </div>

//         <div className="single_chat bg-violet-100 cursor-pointer hover:bg-violet-300  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <span className='message text-[13px]'>How are you</span>
//           </div>
//          </div>

//           <div className='flex flex-col space-y-2'>
//             <span>10:35 pm</span>
//             <span className='w-5 h-5 rounded-full bg-violet-600 text-sm  text-white flex ml-10 justify-center items-center '>2</span>
//           </div>
//         </div>

//         <div className="single_chat bg-violet-100 cursor-pointer hover:bg-violet-300  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <span className='message text-[13px]'>How are you</span>
//           </div>
//          </div>

//           <div className='flex flex-col space-y-2'>
//             <span>10:35 pm</span>
//             <span className='w-5 h-5 rounded-full bg-violet-600 text-sm  text-white flex ml-10 justify-center items-center '>2</span>
//           </div>
//         </div>

//         <div className="single_chat bg-violet-100 cursor-pointer hover:bg-violet-300  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <span className='message text-[13px]'>How are you</span>
//           </div>
//          </div>

//           <div className='flex flex-col space-y-2'>
//             <span>10:35 pm</span>
//             <span className='w-5 h-5 rounded-full bg-violet-600 text-sm  text-white flex ml-10 justify-center items-center '>2</span>
//           </div>
//         </div>
//         {/*  end single chart */}
//       </div>
//     </TabPanel>
//     <TabPanel>
//       {/*  for calls  */}
       
//       {/*  this is chart Section */}
//       <div className="chats overflow-auto flex  justify-center h-[360px] mt-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      
      
      
//         {/* single call section  1*/}
//         <div className="single_chat w-[90%] h-[70px] cursor-pointer shadow-sm mt-2 rounded-2xl  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <div className='flex items-center gap-2'>
                
//               <span className='message text-[13px] flex gap-1  items-center'> <Video className='text-green-400 fill-current' /> Outgoing  </span> <span>. Today, 2:30 PM</span>
//               </div>
//           </div>
//          </div>

//           <button className='w-10 h-10 bg-violet-100 flex justify-center items-center rounded-full'>
//           <Phone className='text-violet-500 w-5 h-5' />
//           </button>
//         </div>


 




//         </div>
      
//     </TabPanel>
//     <TabPanel>
//     <h2 className='text-sm font-bold text-slate-400 ml-5 uppercase'>Recent Chats</h2>
//       {/*  this is all Contact Section */}
//       <div className="chats overflow-auto custom-scrollbar h-[360px]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
//         {/* single contact section */}
//         <div className="single_chat bg-violet-100 cursor-pointer hover:bg-violet-300  py-4 flex justify-between items-center px-2">
//          <div className='flex gap-2'>
//          <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
//           <div className="name space-y--1">
//               <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
//               <span className='message text-[13px] flex items-center'><span className='w-6 h-6  rounded-full text-green-600 flex items-center'><Dot className='w-10 h-10' /></span> Online</span>
//           </div>
//          </div>

//           <div className='flex gap-2 items-start space-y-2'>
//            <span><Video className='text-slate-500 hover:text-green-500 fill-current'></Video></span>
//            <span><Phone className='text-slate-500 hover:text-green-500 fill-current'></Phone></span>
//           </div>
//         </div>
//         </div>
//     </TabPanel>
//   </Tabs>

//         </div>
//     );
// };

// export default Sidebar;


import { ChartArea, Dot, EllipsisVertical, Menu, MessageCircle, Phone, Search, UserRound, Video } from 'lucide-react';
import React, { useState, useEffect, useContext } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const Sidebar = ({ onSelectRecipient }) => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [recentChats, setRecentChats] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [selectedUserId, setSelectedUserId] = useState(null);

    // Fetch all users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
                console.log(response.data)
                // Filter out the current user from the list
                const filteredUsers = response.data.filter(u => u._id !== user?.id);
                setUsers(filteredUsers);
               
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

    

        if (user && user.id) {
            fetchUsers();
        }
    }, [user]);

    console.log(users)

    // Fetch recent chats
    useEffect(() => {
        const fetchRecentChats = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${user.id}/recent-chats`);
                setRecentChats(response.data.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching recent chats:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user && user.id) {
            fetchRecentChats();
        }
    }, [user]);

    // Handle user search
    const filteredUsers = users.filter(user => 
        user.fullName && user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    // Handle recipient selection
    const handleSelectUser = (userId) => {
        setSelectedUserId(userId);
        onSelectRecipient(userId);
    };

    // Format last message time
    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        
        // If message is from today, show time
        if (date.toDateString() === now.toDateString()) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        
        // If message is from this week, show day name
        const daysAgo = Math.floor((now - date) / (1000 * 60 * 60 * 24));
        if (daysAgo < 7) {
            return date.toLocaleDateString([], { weekday: 'short' });
        }
        
        // Otherwise show date
        return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    };

    return (
        <div className='w-[530px] h-full border-[1px] border-slate-200'>
            <div className='w-full h-20 border-b-[1px] border-slate-200 px-3 flex justify-between items-center'>
                {/* brand name */}
                <div className='band-name flex justify-center items-center gap-2'>
                    <img src="/public/vite.svg" alt="" />
                    <h2>Quick Chat</h2>
                </div>
                <div className="dark-mode flex justify-center items-center gap-2">
                    {/* dark button */}
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <EllipsisVertical />
                </div>
            </div>

            {/* tab option start */}
            <Tabs className='border-0' selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                <TabList className='flex justify-between items-center px-5 py-5'>
                    <Tab className='focus:outline-none px-2 py-3 text-slate-500 font-extrabold cursor-pointer flex gap-2'>
                        <MessageCircle /> Chats
                    </Tab>
                    <Tab className='focus:outline-none px-2 py-3 text-slate-500 font-extrabold cursor-pointer flex gap-2'>
                        <Phone /> Calls
                    </Tab>
                    <Tab className='focus:outline-none px-2 py-3 text-slate-500 font-extrabold cursor-pointer flex gap-2'>
                        <UserRound /> Contacts
                    </Tab>
                </TabList>
                <hr className='text-slate-200' />
                <div className='w-full flex justify-center relative'>
                    <Search className='scale-75 text-slate-500 absolute left-6 top-5' />
                    <input 
                        type="text" 
                        placeholder='Enter search' 
                        className='mt-3 mb-3 px-8 py-2 w-[90%] border-0 bg-slate-200 rounded-4xl focus:outline-violet-600'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <TabPanel>
                    <h2 className='text-sm font-bold text-slate-400 ml-5 uppercase'>Recent Chats</h2>
                    {/* Chats Section */}
                    <div className="chats overflow-auto custom-scrollbar h-[360px]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {loading ? (
                            <div className="flex justify-center items-center h-32">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
                            </div>
                        ) : recentChats.length === 0 ? (
                            <div className="text-center text-slate-500 mt-10">
                                No recent chats found. Start a conversation from the Contacts tab!
                            </div>
                        ) : (
                            recentChats || [].map((chat) => (
                                <div 
                                    key={chat._id}
                                    className={`single_chat ${selectedUserId === chat.userId ? 'bg-violet-300' : 'bg-violet-100'} cursor-pointer hover:bg-violet-300 py-4 flex justify-between items-center px-2`}
                                    onClick={() => handleSelectUser(chat.userId)}
                                >
                                    <div className='flex gap-2'>
                                        <img src={chat.profilePic || "../../public/my image.jpg"} className='w-11 h-11 rounded-full' alt="" />
                                        <div className="name space-y--1">
                                            <h2 className='uppercase text-sm'>{chat.fullName}</h2>
                                            <span className='message text-[13px]'>{chat.lastMessage}</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col space-y-2'>
                                        <span>{formatTime(chat.lastMessageTime)}</span>
                                        {chat.unreadCount > 0 && (
                                            <span className='w-5 h-5 rounded-full bg-violet-600 text-sm text-white flex ml-10 justify-center items-center'>
                                                {chat.unreadCount}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </TabPanel>
                
                <TabPanel>
                    {/* Calls Section */}
                    <div className="chats overflow-auto flex flex-col items-center h-[360px] mt-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {loading ? (
                            <div className="flex justify-center items-center h-32">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
                            </div>
                        ) : (
                            <div className="single_chat w-[90%] h-[70px] cursor-pointer shadow-sm mt-2 rounded-2xl py-4 flex justify-between items-center px-2">
                                <div className='flex gap-2'>
                                    <img src="../../public/my image.jpg" className='w-11 h-11 rounded-full' alt="" />
                                    <div className="name space-y--1">
                                        <h2 className='uppercase text-sm'>Sandipan kr bag</h2>
                                        <div className='flex items-center gap-2'>
                                            <span className='message text-[13px] flex gap-1 items-center'>
                                                <Video className='text-green-400 fill-current' /> Outgoing
                                            </span>
                                            <span>· Today, 2:30 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <button className='w-10 h-10 bg-violet-100 flex justify-center items-center rounded-full'>
                                    <Phone className='text-violet-500 w-5 h-5' />
                                </button>
                            </div>
                        )}
                    </div>
                </TabPanel>
                
                <TabPanel>
                    <h2 className='text-sm font-bold text-slate-400 ml-5 uppercase'>All Contacts</h2>
                    {/* Contacts Section */}
                    <div className="chats overflow-auto custom-scrollbar h-[360px]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {loading ? (
                            <div className="flex justify-center items-center h-32">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
                            </div>
                        ) : filteredUsers.length === 0 ? (
                            <div className="text-center text-slate-500 mt-10">
                                {searchTerm ? "No contacts match your search" : "No contacts found"}
                            </div>
                        ) : (
                            filteredUsers.map((contact) => (
                                <div 
                                    key={contact._id}
                                    className={`single_chat ${selectedUserId === contact._id ? 'bg-violet-300' : 'bg-violet-100'} cursor-pointer hover:bg-violet-300 py-4 flex justify-between items-center px-2`}
                                    onClick={() => handleSelectUser(contact._id)}
                                >
                                    <div className='flex gap-2'>
                                        <img src={contact.profilePic || "../../public/my image.jpg"} className='w-11 h-11 rounded-full' alt="" />
                                        <div className="name space-y--1">
                                            <h2 className='uppercase text-sm'>{contact.fullName}</h2>
                                            <span className='message text-[13px] flex items-center'>
                                                <span className={`w-6 h-6 rounded-full ${contact.socketId ? 'text-green-600' : 'text-gray-400'} flex items-center`}>
                                                    <Dot className='w-10 h-10' />
                                                </span>
                                                {contact.socketId ? 'Online' : 'Offline'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex gap-2 items-start space-y-2'>
                                        <span><Video className='text-slate-500 hover:text-green-500 fill-current'></Video></span>
                                        <span><Phone className='text-slate-500 hover:text-green-500 fill-current'></Phone></span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Sidebar;

