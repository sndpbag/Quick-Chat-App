import { EllipsisVertical, Menu } from 'lucide-react';
import React from 'react';

const Sidebar = () => {
    return (
         <div className='w-[530px] h-full border-[1px] border-slate-200'>
            <div className='w-full h-20  border-b-[1px]  border-slate-200 px-3 flex justify-between items-center'>
              {/* this band name */}
              
                <div className='band-name flex justify-center items-center gap-2'>
                    <img src="/public/vite.svg" alt="" />
                    <h2>Quick Chat</h2>
                </div>
                <div className="dark-mode flex justify-center items-center gap-2">
                    {/*  dark button */}
                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                <EllipsisVertical />
                </div>
            </div>
            
         </div>
    );
};

export default Sidebar;