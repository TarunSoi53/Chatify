import React from 'react'
import MainSideTopbar from './mainSideTopbar'

function MainSideBar() {
  return (
    <div className='flex flex-col w-90  bg-black h-screen'>
      <MainSideTopbar/>
      <div className="ContactList mt-10 mx-7">
       <div className='flex items-center '>
        <div className='ProfilePic bg-sky-400 w-10 h-10 rounded-full '> </div>
        <div className='ContactName ml-2 text-white'>Contact 1</div>
           {/* <div> <div className="w-1/3 bg-white border-r border-gray-300">
       
        <div className="bg-whatsapp-green p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
            <h2 className="text-white font-semibold">Pebble Chat</h2>
          </div>
        </div>

        
        <div className="p-2 bg-gray-100">
          <div className="bg-white rounded-lg px-2">
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full py-2 px-3 text-gray-700 text-sm focus:outline-none"
            />
          </div>
        </div>

        
        <div className="overflow-y-auto h-[calc(100vh-120px)] ">
          {[1, 2, 3, 4, 5].map((chat) => (
            <div
              key={chat}
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-gray-900 truncate">User {chat}</h3>
                  <span className="text-xs text-gray-500">12:00 PM</span>
                </div>
                <p className="text-sm text-gray-500 truncate">Last message from this chat...</p>
              </div>
            </div>
          ))}
        </div>
      </div></div> */}
       </div>
        
      </div>
    </div>
  )
}

export default MainSideBar
