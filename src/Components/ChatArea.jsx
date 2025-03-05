
import { GitCommitVertical, Phone, Video } from 'lucide-react';
import profile from '../../public/my image.jpg'

const ChatArea = () => {
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


        </div>
    );
};

export default ChatArea;