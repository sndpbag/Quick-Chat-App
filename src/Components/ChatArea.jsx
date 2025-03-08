
import { Bold, GitCommitVertical, Italic, Link, Lock, Mic, Phone, Send, SquarePlus, Video } from 'lucide-react';
import profile from '../../public/my image.jpg'
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";

const ChatArea = () => {
    const socket = io(`${import.meta.env.VITE_API_URL}`); // Server URL
    const [sendMessage,setSendMessage] = useState("")
    const [receiveMessages,setReceiveMessage] = useState([]);
    const [userId,setUserId] = useState("67cb1543784d50b427ac1270");
    const [recipientId,setrecipientId] = useState("67cadffdfa8e2564fae9a73a")

    console.log(receiveMessages)

    // useEffect(() => {
    //     // Receive Message
    //     socket.on("receiveMessage", (data) => {
    //         setReceiveMessage((prevMessages) => [...prevMessages, data]);
    //     });

    //     return () => {
    //         socket.off("receiveMessage");
    //     };
    // }, []);

    useEffect(() => {
        socket.emit("registerUser", userId); // Register User

        socket.on("receivePrivateMessage", (newMessage) => {
            console.log(newMessage)
            if (
                (newMessage.sender === userId && newMessage.receiver === recipientId) ||
                (newMessage.sender === recipientId && newMessage.receiver === userId)
            ) {
                setReceiveMessage((prevMessages) => [...prevMessages, newMessage]);
            }
        });

        return () => {
            socket.off("receivePrivateMessage");
        };
    }, [userId, recipientId]);


    //  for get current time
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



    const handelSendTextmessage = ()=>
    {
        
        // if (sendMessage.trim() !== "") {
        //     const messageData = { text: sendMessage, sender: "User" };
        //     socket.emit("sendMessage", messageData);
        //     setSendMessage(" "); // Clear input field
        // }
        if (sendMessage.trim() === "") return;

        const newMessage = {
            sender: userId,
            receiver: recipientId,
            text: sendMessage,
        };

        socket.emit("sendPrivateMessage", newMessage);
        setReceiveMessage([...sendMessage, { ...newMessage, timestamp: new Date() }]);
        setSendMessage(" ");
    }





    return (
        <div className="w-full h-full bg-white">
            {/* navbar */}
            <div className='w-full h-20 border-slate-200 border-b-[1px] flex justify-between px-5 items-center '>

                <div className="profile flex gap-3">
                    <img src={profile} className='w-10 h-10 rounded-full' alt="" />
                    <div className='flex flex-col'>
                        <h2 className='text-slate-500'>Sndp bag</h2>
                        <span className='text-green-600 text-[12px]'>Online</span>
                    </div>
                </div>

                {/*  audio and video section */}
                <div className="video-audio-section flex gap-5">
                    <div className="video w-12 h-12  flex justify-center items-center bg-slate-200 hover:bg-amber-300 hover:scale-75 transform cursor-pointer transition-all  rounded-full"><Video /></div>
                    <div className="audio w-12 h-12  flex justify-center items-center bg-slate-200 hover:bg-amber-300  hover:scale-75 transform cursor-pointer transition-all rounded-full"><Phone /></div>
                    <div className="icon w-12 h-12  flex justify-center items-center bg-slate-200 hover:bg-amber-300  hover:scale-75 transform cursor-pointer transition-all rounded-full"><GitCommitVertical /></div>
                </div>

            </div>
            {/* end navbar */}

            {/* message area */}
            <div className='message-area w-full h-[409px] border-[1px] px-10 border-slate-200 overflow-auto'>

                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>

                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>



{
    
   receiveMessages.map((rcvMsg ,index )=>{
   
   return( <div key={index} className="chat chat-end">
    <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <div className="chat-header">
        {/* {rcvMsg.sender} */}
        <time className="text-xs opacity-50">{currentTime}</time>
    </div>
    <div className="chat-bubble">{rcvMsg.text}</div>
    <div className="chat-footer opacity-50">Seen at {currentTime}</div>
</div>
   );

   }) 
}


              






                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>

                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>



               


                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>

                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>



                


                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-header">
                       Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>

                    <div className="chat-bubble">{sendMessage}</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>

            </div>

            {/* end message area */}

            <div className="chat-input w-full h-[125px] border border-slate-200">

                {/*  input chat section */}
                <div className="flex gap-2 w-full  p-2 rounded-lg">
                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        <SquarePlus size={24} />
                    </button>
                    <input
                    value={sendMessage}
                    onChange={(e)=>setSendMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Enter Message"
                    />
                    <button onClick={handelSendTextmessage} className={`p-2 bg-green-500 focus:outline-none text-white rounded-lg hover:bg-green-600`} 
                    disabled={sendMessage.length === 0}
                    >
                        <Send className='focus:outline-none' size={24} />
                    </button>
                </div>

                {/* bold itailc link section */}

                <div className='icon-section w-full h-12 flex justify-between items-center p-2 '>
                    <div className="icon flex gap-2">
                    <Bold size={16} className='text-slate-500'/>
                    <Italic size={16} className='text-slate-500' />
                    <Link  size={16} className='text-slate-500'/>
                    <Mic  size={16} className='text-slate-500'/>
                    </div>
                    <div className='flex items-center gap-1  text-sm'> <Lock size={14} /> End-to-end encrypted</div>
                </div>




            </div>



        </div>
    );
};

export default ChatArea;