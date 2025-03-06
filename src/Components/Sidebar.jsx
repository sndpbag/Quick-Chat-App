import { ChartArea, EllipsisVertical, Menu, MessageCircle, Phone, Search, UserRound } from 'lucide-react';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

            {/*  tab option start */}

            <Tabs className='  border-0'>
    <TabList className=' flex justify-between items-center   px-5 py-5'>
      <Tab className='focus:outline-none px-2 py-3 text-slate-500 font-extrabold cursor-pointer flex gap-2'> <MessageCircle /> Chats</Tab>
      <Tab className='focus:outline-none px-2 py-3  text-slate-500 font-extrabold cursor-pointer flex gap-2'><Phone /> Calls</Tab>
      <Tab className='focus:outline-none px-2 py-3 text-slate-500 font-extrabold cursor-pointer flex gap-2'> <UserRound /> Contacts</Tab>
    </TabList>
      <hr className='text-slate-200' />
    <div className='w-full flex justify-center relative'>
    <Search className='scale-75 text-slate-500 absolute left-6 top-5' />
    <input type="text" placeholder='Enter search' className='mt-3 mb-3 px-8 py-2 w-[90%] border-0 bg-slate-200 rounded-4xl  focus:outline-violet-600' />
    </div>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default Sidebar;