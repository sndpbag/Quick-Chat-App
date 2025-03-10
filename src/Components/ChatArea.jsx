
// // import { Bold, GitCommitVertical, Italic, Link, Lock, Mic, Phone, Send, SquarePlus, Video } from 'lucide-react';

// // import { useContext, useEffect, useState } from 'react';
// // import { io } from "socket.io-client";
// // import { AuthContext } from '../Provider/AuthProvider';

// // const ChatArea = () => {
// //     const {user} = useContext(AuthContext)
// //     const socket = io(`${import.meta.env.VITE_API_URL}`); // Server URL
// //     const [sendMessage,setSendMessage] = useState("")
// //     const [receiveMessages,setReceiveMessage] = useState([]);
// //     const [userId,setUserId] = useState(user.id || " ");
// //     const [recipientId,setrecipientId] = useState("67cb1543784d50b427ac1270")



// //     console.log(receiveMessages)

// //     useEffect(()=>{
// //         if (user) {  // Ensure user is not undefined
// //             setUserId(user.id);
// //         }
// //     },[user])



// //     console.log(userId)
// //     // useEffect(() => {
// //     //     // Receive Message
// //     //     socket.on("receiveMessage", (data) => {
// //     //         setReceiveMessage((prevMessages) => [...prevMessages, data]);
// //     //     });

// //     //     return () => {
// //     //         socket.off("receiveMessage");
// //     //     };
// //     // }, []);

// //     useEffect(() => {
// //         socket.emit("registerUser", userId); // Register User

// //         socket.on("receivePrivateMessage", (newMessage) => {
// //             console.log(newMessage)
// //             if (
// //                 (newMessage.sender === userId && newMessage.receiver === recipientId) ||
// //                 (newMessage.sender === recipientId && newMessage.receiver === userId)
// //             ) {
// //                 setReceiveMessage((prevMessages) => [...prevMessages, newMessage]);
// //             }
// //         });

// //         return () => {
// //             socket.off("receivePrivateMessage");
// //         };
// //     }, [userId, recipientId]);


// //     //  for get current time
// //     const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



// //     const handelSendTextmessage = ()=>
// //     {

// //         // if (sendMessage.trim() !== "") {
// //         //     const messageData = { text: sendMessage, sender: "User" };
// //         //     socket.emit("sendMessage", messageData);
// //         //     setSendMessage(" "); // Clear input field
// //         // }
// //         if (sendMessage.trim() === "") return;

// //         const newMessage = {
// //             sender: userId,
// //             receiver: recipientId,
// //             text: sendMessage,
// //         };

// //         socket.emit("sendPrivateMessage", newMessage);
// //         setReceiveMessage([...sendMessage, { ...newMessage, timestamp: new Date() }]);
// //         setSendMessage(" ");
// //     }





// //     return (
// //         <div className="w-full h-full bg-white">
// //             {/* navbar */}
// //             <div className='w-full h-20 border-slate-200 border-b-[1px] flex justify-between px-5 items-center '>

// //                 <div className="profile flex gap-3">
// //                     <img src="../../public/my image.jpg" className='w-10 h-10 rounded-full' alt="" />
// //                     <div className='flex flex-col'>
// //                         <h2 className='text-slate-500'>{user?.fullName}</h2>
// //                         <span className='text-green-600 text-[12px]'>Online</span>
// //                     </div>
// //                 </div>

// //                 {/*  audio and video section */}
// //                 <div className="video-audio-section flex gap-5">
// //                     <div className="video w-12 h-12  flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all  rounded-full"><Video /></div>
// //                     <div className="audio w-12 h-12  flex justify-center items-center bg-slate-200 hover:bg-amber-300  hover:scale-75 transform cursor-pointer transition-all rounded-full"><Phone /></div>
// //                     <div className="icon w-12 h-12  flex justify-center items-center bg-slate-200 hover:bg-amber-300  hover:scale-75 transform cursor-pointer transition-all rounded-full"><GitCommitVertical /></div>
// //                 </div>

// //             </div>
// //             {/* end navbar */}

// //             {/* message area */}
// //             <div className='message-area w-full h-[409px] border-[1px] px-10 border-slate-200 overflow-auto'>

// //                 <div className="chat chat-start">
// //                     <div className="chat-image avatar">
// //                         <div className="w-10 rounded-full">
// //                             <img
// //                                 alt="Tailwind CSS chat bubble component"
// //                                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
// //                         </div>
// //                     </div>
// //                     <div className="chat-header">
// //                         Obi-Wan Kenobi
// //                         <time className="text-xs opacity-50">12:45</time>
// //                     </div>

// //                     <div className="chat-bubble">You were the Chosen One!</div>
// //                     <div className="chat-footer opacity-50">Delivered</div>
// //                 </div>





// // {

// // //    receiveMessages.map((rcvMsg ,index )=>{

// // //    return( <div key={index} className="chat chat-end">
// // //     <div className="chat-image avatar">
// // //         <div className="w-10 rounded-full">
// // //             <img
// // //                 alt="Tailwind CSS chat bubble component"
// // //                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
// // //         </div>
// // //     </div>
// // //     <div className="chat-header">
// // //         {/* {rcvMsg.sender} */}
// // //         <time className="text-xs opacity-50">{currentTime}</time>
// // //     </div>
// // //     <div className="chat-bubble">{rcvMsg.text}</div>
// // //     <div className="chat-footer opacity-50">Seen at {currentTime}</div>
// // // </div>
// // //    );

// // //    }) 


// // receiveMessages.map((rcvMsg, index) => (
// //     <div key={index} className={`chat ${rcvMsg.sender === userId ? "chat-end" : "chat-start"}`}>
// //         <div className="chat-image avatar">
// //             <div className="w-10 rounded-full">
// //                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
// //             </div>
// //         </div>
// //         <div className="chat-header">
// //             {rcvMsg.sender === userId ? "You" : "Friend"}
// //             <time className="text-xs opacity-50">{currentTime}</time>
// //         </div>
// //         <div className="chat-bubble">{rcvMsg.text}</div>
// //         <div className="chat-footer opacity-50">Seen at {currentTime}</div>
// //     </div>
// // ))

// // }






















// //                 {/* <div className="chat chat-start">
// //                     <div className="chat-image avatar">
// //                         <div className="w-10 rounded-full">
// //                             <img
// //                                 alt="Tailwind CSS chat bubble component"
// //                                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
// //                         </div>
// //                     </div>
// //                     <div className="chat-header">
// //                        Obi-Wan Kenobi
// //                         <time className="text-xs opacity-50">12:45</time>
// //                     </div>

// //                     <div className="chat-bubble">{sendMessage}</div>
// //                     <div className="chat-footer opacity-50">Delivered</div>
// //                 </div> */}

// //             </div>

// //             {/* end message area */}

// //             <div className="chat-input w-full h-[125px] border border-slate-200">

// //                 {/*  input chat section */}
// //                 <div className="flex gap-2 w-full  p-2 rounded-lg">
// //                     <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
// //                         <SquarePlus size={24} />
// //                     </button>
// //                     <input
// //                     value={sendMessage}
// //                     onChange={(e)=>setSendMessage(e.target.value)}
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                         type="text"
// //                         placeholder="Enter Message"
// //                     />
// //                     <button onClick={handelSendTextmessage} className={`p-2 bg-green-500 focus:outline-none text-white rounded-lg hover:bg-green-600`} 
// //                     disabled={sendMessage.length === 0}
// //                     >
// //                         <Send className='focus:outline-none' size={24} />
// //                     </button>
// //                 </div>

// //                 {/* bold itailc link section */}

// //                 <div className='icon-section w-full h-12 flex justify-between items-center p-2 '>
// //                     <div className="icon flex gap-2">
// //                     <Bold size={16} className='text-slate-500'/>
// //                     <Italic size={16} className='text-slate-500' />
// //                     <Link  size={16} className='text-slate-500'/>
// //                     <Mic  size={16} className='text-slate-500'/>
// //                     </div>
// //                     <div className='flex items-center gap-1  text-sm'> <Lock size={14} /> End-to-end encrypted</div>
// //                 </div>




// //             </div>



// //         </div>
// //     );
// // };

// // export default ChatArea;



// // import { Bold, GitCommitVertical, Italic, Link, Lock, Mic, Phone, Send, SquarePlus, Video } from 'lucide-react';
// // import { useContext, useEffect, useState, useRef } from 'react';
// // import { io } from "socket.io-client";
// // import { AuthContext } from '../Provider/AuthProvider';

// // const ChatArea = () => {
// //     const { user } = useContext(AuthContext);
// //     const [socket, setSocket] = useState(null);
// //     const [sendMessage, setSendMessage] = useState("");
// //     const [receiveMessages, setReceiveMessages] = useState([]);
// //     const [userId, setUserId] = useState("");
// //     const [recipientId, setRecipientId] = useState("67cb1543784d50b427ac1270");
// //     const messageAreaRef = useRef(null);

// //     // একটি সকেট সংযোগ তৈরি করুন শুধুমাত্র একবার
// //     useEffect(() => {
// //         const newSocket = io(import.meta.env.VITE_API_URL);
// //         setSocket(newSocket);

// //         // ক্লিনআপ ফাংশন
// //         return () => {
// //             newSocket.disconnect();
// //         };
// //     }, []);

// //     // ব্যবহারকারী আইডি সেট করুন
// //     useEffect(() => {
// //         if (user && user.id) {
// //             setUserId(user.id);
// //         }
// //     }, [user]);

// //     // সকেট ইভেন্ট লিসেনার সেট আপ করুন
// //     useEffect(() => {
// //         if (!socket || !userId) return;

// //         // ব্যবহারকারী রেজিস্টার করুন
// //         socket.emit("registerUser", userId);

// //         // প্রাইভেট মেসেজ গ্রহণের জন্য
// //         socket.on("receivePrivateMessage", (newMessage) => {
// //             if (
// //                 (newMessage.sender === userId && newMessage.receiver === recipientId) ||
// //                 (newMessage.sender === recipientId && newMessage.receiver === userId)
// //             ) {
// //                 setReceiveMessages(prevMessages => [...prevMessages, newMessage]);
// //             }
// //         });

// //         // পাঠানো মেসেজ এর কনফার্মেশন
// //         socket.on("messageSent", (newMessage) => {
// //             setReceiveMessages(prevMessages => [...prevMessages, newMessage]);
// //         });

// //         // এরর হ্যান্ডলিং
// //         socket.on("messageError", (error) => {
// //             console.error("Message error:", error);
// //             // এখানে আপনি ইউজারকে এরর মেসেজ দেখাতে পারেন
// //         });

// //         return () => {
// //             socket.off("receivePrivateMessage");
// //             socket.off("messageSent");
// //             socket.off("messageError");
// //         };
// //     }, [socket, userId, recipientId]);

// //     // মেসেজ এরিয়া অটো স্ক্রল
// //     useEffect(() => {
// //         if (messageAreaRef.current) {
// //             messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
// //         }
// //     }, [receiveMessages]);

// //     // টাইম ফর্ম্যাটিং ফাংশন
// //     const formatTime = (timestamp) => {
// //         return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// //     };

// //     // মেসেজ পাঠানোর ফাংশন
// //     const handleSendTextMessage = () => {
// //         if (!socket || sendMessage.trim() === "") return;

// //         const newMessage = {
// //             sender: userId,
// //             receiver: recipientId,
// //             text: sendMessage.trim(),
// //         };

// //         socket.emit("sendPrivateMessage", newMessage);
// //         setSendMessage(""); // ইনপুট ক্লিয়ার করুন
// //     };

// //     // এন্টার কি প্রেস করে মেসেজ পাঠানো
// //     const handleKeyPress = (e) => {
// //         if (e.key === 'Enter' && !e.shiftKey) {
// //             e.preventDefault();
// //             handleSendTextMessage();
// //         }
// //     };

// //     return (
// //         <div className="w-full h-full bg-white">
// //             {/* navbar */}
// //             <div className='w-full h-20 border-slate-200 border-b-[1px] flex justify-between px-5 items-center'>
// //                 <div className="profile flex gap-3">
// //                     <img src="/my image.jpg" className='w-10 h-10 rounded-full' alt="" />
// //                     <div className='flex flex-col'>
// //                         <h2 className='text-slate-500'>{user?.fullName}</h2>
// //                         <span className='text-green-600 text-[12px]'>Online</span>
// //                     </div>
// //                 </div>

// //                 {/*  audio and video section */}
// //                 <div className="video-audio-section flex gap-5">
// //                     <div className="video w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><Video /></div>
// //                     <div className="audio w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><Phone /></div>
// //                     <div className="icon w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><GitCommitVertical /></div>
// //                 </div>
// //             </div>
// //             {/* end navbar */}

// //             {/* message area */}
// //             <div ref={messageAreaRef} className='message-area w-full h-[409px] border-[1px] px-10 border-slate-200 overflow-auto'>
// //                 {/* সাম্পল মেসেজ */}
// //                 {/* <div className="chat chat-start">
// //                     <div className="chat-image avatar">
// //                         <div className="w-10 rounded-full">
// //                             <img
// //                                 alt="Tailwind CSS chat bubble component"
// //                                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
// //                         </div>
// //                     </div>
// //                     <div className="chat-header">
// //                         Friend
// //                         <time className="text-xs opacity-50">12:45</time>
// //                     </div>
// //                     <div className="chat-bubble">Hello! How are you?</div>
// //                     <div className="chat-footer opacity-50">Delivered</div>
// //                 </div> */}

// //                 {/* আসল মেসেজগুলি প্রদর্শন */}
// //                 {receiveMessages.map((rcvMsg, index) => (
// //                     <div key={index} className={`chat ${rcvMsg.sender === userId ? "chat-end" : "chat-start"}`}>
// //                         <div className="chat-image avatar">
// //                             <div className="w-10 rounded-full">
// //                                 <img 
// //                                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
// //                                     alt="User Avatar" 
// //                                 />
// //                             </div>
// //                         </div>
// //                         <div className="chat-header">
// //                             {rcvMsg.sender === userId ? "You" : "Friend"}
// //                             <time className="text-xs opacity-50">{rcvMsg.timestamp ? formatTime(rcvMsg.timestamp) : formatTime(new Date())}</time>
// //                         </div>
// //                         <div className="chat-bubble">{rcvMsg.text}</div>
// //                         <div className="chat-footer opacity-50">
// //                             {rcvMsg.sender === userId ? "Sent" : "Received"}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //             {/* end message area */}

// //             <div className="chat-input w-full h-[125px] border border-slate-200">
// //                 {/* input chat section */}
// //                 <div className="flex gap-2 w-full p-2 rounded-lg">
// //                     <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
// //                         <SquarePlus size={24} />
// //                     </button>
// //                     <input
// //                         value={sendMessage}
// //                         onChange={(e) => setSendMessage(e.target.value)}
// //                         onKeyPress={handleKeyPress}
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                         type="text"
// //                         placeholder="Enter Message"
// //                     />
// //                     <button 
// //                         onClick={handleSendTextMessage} 
// //                         className={`p-2 ${sendMessage.trim() ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300'} focus:outline-none text-white rounded-lg`}
// //                         disabled={!sendMessage.trim()}
// //                     >
// //                         <Send className='focus:outline-none' size={24} />
// //                     </button>
// //                 </div>

// //                 {/* bold italic link section */}
// //                 <div className='icon-section w-full h-12 flex justify-between items-center p-2'>
// //                     <div className="icon flex gap-2">
// //                         <Bold size={16} className='text-slate-500'/>
// //                         <Italic size={16} className='text-slate-500' />
// //                         <Link size={16} className='text-slate-500'/>
// //                         <Mic size={16} className='text-slate-500'/>
// //                     </div>
// //                     <div className='flex items-center gap-1 text-sm'> <Lock size={14} /> End-to-end encrypted</div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ChatArea;


// import { Bold, GitCommitVertical, Italic, Link, Lock, Mic, Phone, Send, Square, SquarePlus, Video } from 'lucide-react';
// import { useContext, useEffect, useState, useRef } from 'react';
// import { io } from "socket.io-client";
// import { AuthContext } from '../Provider/AuthProvider';
// import axios from 'axios';

// const ChatArea = ({ recipientId }) => {
//     const { user } = useContext(AuthContext);
//     const [socket, setSocket] = useState(null);
//     const [sendMessage, setSendMessage] = useState("");
//     const [receiveMessages, setReceiveMessages] = useState([]);
//     const [userId, setUserId] = useState("");
//     const [recipient, setRecipient] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const messageAreaRef = useRef(null);
//     const [isListening, setIsListening] = useState(false);
//     const [transcript, setTranscript] = useState(""); // Stores recognized speech
//     let recognition; // Declare recognition globally for stopping later

//     console.log(recipient)
//     // Create a socket connection only once
//     useEffect(() => {
//         const newSocket = io(import.meta.env.VITE_API_URL);
//         setSocket(newSocket);

//         // Cleanup function
//         return () => {
//             newSocket.disconnect();
//         };
//     }, []);

//     // Set user ID
//     useEffect(() => {
//         if (user && user.id) {
//             setUserId(user.id);
//         }
//     }, [user]);

//     // Fetch recipient details
//     useEffect(() => {
//         if (!recipientId) return;

//         const fetchRecipientDetails = async () => {
//             try {
//                 const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${recipientId}`);
//                 setRecipient(response.data);
//             } catch (error) {
//                 console.error("Error fetching recipient details:", error);
//             }
//         };

//         fetchRecipientDetails();
//     }, [recipientId]);

//     // Fetch existing messages when component mounts or when userId/recipientId changes
//     useEffect(() => {
//         if (!userId || !recipientId) return;

//         const fetchMessages = async () => {
//             try {
//                 setIsLoading(true);
//                 setReceiveMessages([]); // Clear previous messages when changing recipient
//                 const response = await axios.get(
//                     `${import.meta.env.VITE_API_URL}/messages/${userId}/${recipientId}`
//                 );
//                 setReceiveMessages(response.data);
//             } catch (error) {
//                 console.error("Error fetching messages:", error);
//                 // You can add user-visible error handling here
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchMessages();
//     }, [userId, recipientId]);

//     // Set up socket event listeners
//     useEffect(() => {
//         if (!socket || !userId) return;

//         // Register user
//         socket.emit("registerUser", userId);

//         // For receiving private messages
//         socket.on("receivePrivateMessage", (newMessage) => {
//             if (
//                 (newMessage.sender === userId && newMessage.receiver === recipientId) ||
//                 (newMessage.sender === recipientId && newMessage.receiver === userId)
//             ) {
//                 setReceiveMessages(prevMessages => [...prevMessages, newMessage]);
//             }
//         });

//         // Confirmation of sent messages
//         socket.on("messageSent", (newMessage) => {
//             setReceiveMessages(prevMessages => [...prevMessages, newMessage]);
//         });

//         // Error handling
//         socket.on("messageError", (error) => {
//             console.error("Message error:", error);
//             // You can show error message to the user here
//         });

//         return () => {
//             socket.off("receivePrivateMessage");
//             socket.off("messageSent");
//             socket.off("messageError");
//         };
//     }, [socket, userId, recipientId]);

//     // Auto-scroll message area
//     useEffect(() => {
//         if (messageAreaRef.current) {
//             messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
//         }
//     }, [receiveMessages]);

//     // Time formatting function
//     const formatTime = (timestamp) => {
//         return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     // Function to send message
//     const handleSendTextMessage = () => {
//         if (!socket || sendMessage.trim() === "") return;

//         const newMessage = {
//             sender: userId,
//             receiver: recipientId,
//             text: sendMessage.trim(),
//             timestamp: new Date().toISOString() // Add client-side timestamp for immediate UI update
//         };

//         socket.emit("sendPrivateMessage", newMessage);
//         setSendMessage(""); // Clear input
//     };

//     // Send message on Enter key press
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             handleSendTextMessage();
//         }
//     };

//     // If no recipient selected, show empty state
//     if (!recipientId) {
//         return (
//             <div className="w-full h-full bg-white flex justify-center items-center">
//                 <div className="text-center text-slate-500">
//                     <h2 className="text-2xl mb-2">Select a contact to start chatting</h2>
//                     <p>Choose someone from your contacts or recent chats</p>
//                 </div>
//             </div>
//         );

//     }


//     const handleVoiceText = () => {

//         if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
//             alert("Speech recognition not supported in this browser.");
//             return;
//         }
//         const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//         recognition.continuous = true; // Keeps listening even after a pause
//         recognition.interimResults = true; // Provides interim results before final transcript
//         recognition.lang = 'en-US'; // Sets language to English (US)
      

//         if (!isListening) {
//             recognition.start();
//             setIsListening(true);

//             recognition.onresult = (event) => {
//                 let finalTranscript = "";

//                 for (let i = 0; i < event.results.length; i++) {
//                     finalTranscript += event.results[i][0].transcript + " "; // Extract transcript text
//                 }

//                 setTranscript(finalTranscript.trim()); // Update transcript state
//             };


//             recognition.onerror = (event) => {
//                 console.error("Speech recognition error:", event.error);
//                 setIsListening(false);
//             };

//             recognition.onend = () => {
//                 setIsListening(false); // Reset state when recognition stops
//             };

//         }
//         else {
//             recognition.stop();
//             setIsListening(false);
//         }





//     }


//     return (
//         <div className="w-full h-full bg-white">
//             {/* navbar */}
//             <div className='w-full h-20 border-slate-200 border-b-[1px] flex justify-between px-5 items-center'>
//                 <div className="profile flex gap-3">
//                     <img
//                         src={recipient?.data?.profilePic || "/my image.jpg"}
//                         className='w-10 h-10 rounded-full'
//                         alt=""
//                     />
//                     <div className='flex flex-col'>
//                         <h2 className='text-slate-500'>{recipient?.data?.username || 'Loading...'}</h2>
//                         <span className={`text-[12px] ${recipient?.data?.isOnline ? 'text-green-600' : 'text-gray-500'}`}>
//                             {recipient?.data?.isOnline ? 'Online' : 'Offline'}
//                         </span>
//                     </div>
//                 </div>

//                 {/*  audio and video section */}
//                 <div className="video-audio-section flex gap-5">
//                     <div className="video w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><Video /></div>
//                     <div className="audio w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><Phone /></div>
//                     <div className="icon w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><GitCommitVertical /></div>
//                 </div>
//             </div>
//             {/* end navbar */}

//             {/* message area */}
//             <div ref={messageAreaRef} className='message-area w-full h-[409px] border-[1px] px-10 border-slate-200 overflow-auto'>
//                 {isLoading ? (
//                     <div className="flex justify-center items-center h-full">
//                         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//                     </div>
//                 ) : receiveMessages.length === 0 ? (
//                     <div className="flex justify-center items-center h-full text-gray-500">
//                         No messages yet. Start a conversation!
//                     </div>
//                 ) : (
//                     receiveMessages.map((rcvMsg, index) => (
//                         <div key={index} className={`chat ${rcvMsg.sender === userId ? "chat-end" : "chat-start"}`}>
//                             <div className="chat-image avatar">
//                                 <div className="w-10 rounded-full">
//                                     <img
//                                         src={rcvMsg.sender === userId ?
//                                             (user?.profilePic || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp") :
//                                             (recipient?.data?.profilePic || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp")}
//                                         alt="User Avatar"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="chat-header">
//                                 {rcvMsg.sender === userId ? "You" : recipient?.data.username || "Friend"}
//                                 <time className="text-xs opacity-50">{rcvMsg.timestamp ? formatTime(rcvMsg.timestamp) : formatTime(new Date())}</time>
//                             </div>
//                             <div className="chat-bubble">{rcvMsg.text}</div>
//                             <div className="chat-footer opacity-50">
//                                 {rcvMsg.sender === userId ? "Sent" : "Received"}
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//             {/* end message area */}

//             <div className="chat-input w-full h-[125px] border border-slate-200">
//                 {/* input chat section */}
//                 <div className="flex gap-2 w-full p-2 rounded-lg">
//                     <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//                         <SquarePlus size={24} />
//                     </button>
//                     <input
//                         value={sendMessage}
//                         onChange={(e) => setSendMessage(e.target.value)}
//                         onKeyPress={handleKeyPress}
//                         id='inputMsg'
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         type="text"
//                         placeholder="Enter Message"
//                     />
//                     <button
//                         onClick={handleSendTextMessage}
//                         className={`p-2 ${sendMessage.trim() ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300'} focus:outline-none text-white rounded-lg`}
//                         disabled={!sendMessage.trim()}
//                     >
//                         <Send className='focus:outline-none' size={24} />
//                     </button>
//                 </div>

//                 {/* bold italic link section */}
//                 <div className='icon-section w-full h-12 flex justify-between items-center p-2'>
//                     <div className="icon flex gap-2">
//                         <Bold size={16} className='text-slate-500' />
//                         <Italic size={16} className='text-slate-500' />
//                         <Link size={16} className='text-slate-500' />
//                         <button onClick={handleVoiceText}>
//                             {isListening ? (
//                                 <Square size={16} className="text-red-500" /> // Stop icon
//                             ) : (
//                                 <Mic size={16} className="text-slate-500" /> // Mic icon
//                             )}
//                         </button>
//                     </div>
//                     <div className='flex items-center gap-1 text-sm'> <Lock size={14} /> End-to-end encrypted</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChatArea;

import { Bold, GitCommitVertical, Italic, Link, Lock, Mic, Phone, Send, Square, SquarePlus, Video } from 'lucide-react';
import { useContext, useEffect, useState, useRef } from 'react';
import { io } from "socket.io-client";
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const ChatArea = ({ recipientId }) => {
    const { user } = useContext(AuthContext);
    const [socket, setSocket] = useState(null);
    const [sendMessage, setSendMessage] = useState("");
    const [receiveMessages, setReceiveMessages] = useState([]);
    const [userId, setUserId] = useState("");
    const [recipient, setRecipient] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const messageAreaRef = useRef(null);
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef(null);
    const inputRef = useRef(null);

    // Create a socket connection only once
    useEffect(() => {
        const newSocket = io(import.meta.env.VITE_API_URL);
        setSocket(newSocket);

        // Cleanup function
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Set user ID
    useEffect(() => {
        if (user && user.id) {
            setUserId(user.id);
        }
    }, [user]);

    // Fetch recipient details
    useEffect(() => {
        if (!recipientId) return;

        const fetchRecipientDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${recipientId}`);
                setRecipient(response.data);
            } catch (error) {
                console.error("Error fetching recipient details:", error);
            }
        };

        fetchRecipientDetails();
    }, [recipientId]);

    // Fetch existing messages when component mounts or when userId/recipientId changes
    useEffect(() => {
        if (!userId || !recipientId) return;

        const fetchMessages = async () => {
            try {
                setIsLoading(true);
                setReceiveMessages([]); // Clear previous messages when changing recipient
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/messages/${userId}/${recipientId}`
                );
                setReceiveMessages(response.data);
            } catch (error) {
                console.error("Error fetching messages:", error);
                // You can add user-visible error handling here
            } finally {
                setIsLoading(false);
            }
        };

        fetchMessages();
    }, [userId, recipientId]);

    // Set up socket event listeners
    useEffect(() => {
        if (!socket || !userId) return;

        // Register user
        socket.emit("registerUser", userId);

        // For receiving private messages
        socket.on("receivePrivateMessage", (newMessage) => {
            if (
                (newMessage.sender === userId && newMessage.receiver === recipientId) ||
                (newMessage.sender === recipientId && newMessage.receiver === userId)
            ) {
                setReceiveMessages(prevMessages => [...prevMessages, newMessage]);
            }
        });

        // Confirmation of sent messages
        socket.on("messageSent", (newMessage) => {
            setReceiveMessages(prevMessages => [...prevMessages, newMessage]);
        });

        // Error handling
        socket.on("messageError", (error) => {
            console.error("Message error:", error);
            // You can show error message to the user here
        });

        return () => {
            socket.off("receivePrivateMessage");
            socket.off("messageSent");
            socket.off("messageError");
        };
    }, [socket, userId, recipientId]);

    // Auto-scroll message area
    useEffect(() => {
        if (messageAreaRef.current) {
            messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
        }
    }, [receiveMessages]);

    // Cleanup speech recognition on unmount
    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    // Time formatting function
    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Function to send message
    const handleSendTextMessage = () => {
        if (!socket || sendMessage.trim() === "") return;

        const newMessage = {
            sender: userId,
            receiver: recipientId,
            text: sendMessage.trim(),
            timestamp: new Date().toISOString() // Add client-side timestamp for immediate UI update
        };

        socket.emit("sendPrivateMessage", newMessage);
        setSendMessage(""); // Clear input
    };

    // Send message on Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendTextMessage();
        }
    };

    // Handle voice recognition
    const handleVoiceText = () => {
        if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
            alert("Speech recognition not supported in this browser.");
            return;
        }

        if (isListening) {
            // Stop listening
            if (recognitionRef.current) {
                recognitionRef.current.stop();
                recognitionRef.current = null;
            }
            setIsListening(false);
            return;
        }

        // Start listening
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        recognitionRef.current = recognition;
        
        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            
            setSendMessage(transcript);
            
            // Focus on input to show real-time changes
            if (inputRef.current) {
                inputRef.current.focus();
            }
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            setIsListening(false);
            recognitionRef.current = null;
        };

        recognition.onend = () => {
            setIsListening(false);
            recognitionRef.current = null;
        };

        recognition.start();
    };

    // If no recipient selected, show empty state
    if (!recipientId) {
        return (
            <div className="w-full h-full bg-white flex justify-center items-center">
                <div className="text-center text-slate-500">
                    <h2 className="text-2xl mb-2">Select a contact to start chatting</h2>
                    <p>Choose someone from your contacts or recent chats</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full bg-white relative">
            {/* navbar */}
            <div className='w-full h-20 border-slate-200 border-b-[1px] flex justify-between px-5 items-center'>
                <div className="profile flex gap-3">
                    <img
                        src={recipient?.data?.profilePic || "/my image.jpg"}
                        className='w-10 h-10 rounded-full'
                        alt=""
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-slate-500'>{recipient?.data?.username || 'Loading...'}</h2>
                        <span className={`text-[12px] ${recipient?.data?.isOnline ? 'text-green-600' : 'text-gray-500'}`}>
                            {recipient?.data?.isOnline ? 'Online' : 'Offline'}
                        </span>
                    </div>
                </div>

                {/* audio and video section */}
                <div className="video-audio-section flex gap-5">
                    <div className="video w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><Video /></div>
                    <div className="audio w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><Phone /></div>
                    <div className="icon w-12 h-12 flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all rounded-full"><GitCommitVertical /></div>
                </div>
            </div>
            {/* end navbar */}

            {/* message area */}
            <div ref={messageAreaRef} className='message-area w-full h-[409px] border-[1px] px-10 border-slate-200 overflow-auto'>
                {isLoading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                ) : receiveMessages.length === 0 ? (
                    <div className="flex justify-center items-center h-full text-gray-500">
                        No messages yet. Start a conversation!
                    </div>
                ) : (
                    receiveMessages.map((rcvMsg, index) => (
                        <div key={index} className={`chat ${rcvMsg.sender === userId ? "chat-end" : "chat-start"}`}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src={rcvMsg.sender === userId ?
                                            (user?.profilePic || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp") :
                                            (recipient?.data?.profilePic || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp")}
                                        alt="User Avatar"
                                    />
                                </div>
                            </div>
                            <div className="chat-header">
                                {rcvMsg.sender === userId ? "You" : recipient?.data?.username || "Friend"}
                                <time className="text-xs opacity-50">{rcvMsg.timestamp ? formatTime(rcvMsg.timestamp) : formatTime(new Date())}</time>
                            </div>
                            <div className="chat-bubble">{rcvMsg.text}</div>
                            <div className="chat-footer opacity-50">
                                {rcvMsg.sender === userId ? "Sent" : "Received"}
                            </div>
                        </div>
                    ))
                )}
            </div>
            {/* end message area */}

            <div className="chat-input w-full h-[125px] border border-slate-200">
                {/* input chat section */}
                <div className="flex gap-2 w-full p-2 rounded-lg">
                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        <SquarePlus size={24} />
                    </button>
                    <input
                        ref={inputRef}
                        value={sendMessage}
                        onChange={(e) => setSendMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Enter Message"
                    />
                    <button
                        onClick={handleSendTextMessage}
                        className={`p-2 ${sendMessage.trim() ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300'} focus:outline-none text-white rounded-lg`}
                        disabled={!sendMessage.trim()}
                    >
                        <Send className='focus:outline-none' size={24} />
                    </button>
                </div>

                {/* bold italic link section */}
                <div className='icon-section w-full h-12 flex justify-between items-center p-2'>
                    <div className="icon flex gap-2">
                        <Bold size={16} className='text-slate-500 cursor-pointer' />
                        <Italic size={16} className='text-slate-500 cursor-pointer' />
                        <Link size={16} className='text-slate-500 cursor-pointer' />
                        <button 
                            onClick={handleVoiceText}
                            className="focus:outline-none relative"
                        >
                            {isListening ? (
                                <Square size={16} className="text-red-500 z-10" />
                            ) : (
                                <Mic size={16} className="text-slate-500" />
                            )}
                        </button>
                    </div>
                    <div className='flex items-center gap-1 text-sm'> <Lock size={14} /> End-to-end encrypted</div>
                </div>
            </div>

            {/* Voice recognition popup animation */}
            {isListening && (
                <div className="voice-animation-overlay absolute inset-0 flex items-center justify-center bg-slate-200 bg-opacity-50 z-50">
                    <div className="voice-animation-container bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="mic-animation relative mx-auto mb-4">
                            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center animate-pulse">
                                <Mic className="text-white" size={32} />
                            </div>
                            <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-red-300 animate-ping"></div>
                            <div className="absolute top-2 left-2 w-12 h-12 rounded-full border-4 border-red-400 animate-ping animation-delay-300"></div>
                        </div>
                        <p className="text-lg font-semibold mb-2">Listening...</p>
                        <p className="text-sm text-gray-600 mb-4">Speak now to send a message</p>
                        <button 
                            onClick={handleVoiceText}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                            Stop
                        </button>
                    </div>
                </div>
            )}

            {/* Add CSS for animation delay */}
            <style jsx>{`
                .animation-delay-300 {
                    animation-delay: 300ms;
                }
            `}</style>
        </div>
    );
};

export default ChatArea;