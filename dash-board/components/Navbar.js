import React from 'react'

function Navbar() {
  return (
    <div className='flex w-min-screen justify-between items-center  h-[3rem] bg-[#EDEFF2] px-6 border-2 border-b-gray-200 font-[Roboto]'>
        <div className=' part-1 flex items-center space-x-4'>
            <button className='flex items-center justify-center h-9 w-9 bg-white rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 30 31" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z" fill="#C3CAD9"/>
</svg>
            </button>
            <h5 className='font-bold text-[#4D5E80]'>Constructor</h5>
           </div>
           <div className=' part-1 flex items-center hidden md:block'>
             <ul className='flex text-[#4D5E80] space-x-4 text-xs font-bold'>
                <li>Dashboard</li>
                <li>About Us</li>
                <li>News</li>
                <li>User Policy</li>
                <li>Contacts</li>
                <li>...</li>
             </ul>
           </div>
           <div className=' part-1 flex items-center hidden lg:block '>
           <input
            type="text"
            placeholder="...."
            className="w-full py-1 bg-white px-16 rounded-full bg-gray-200 focus:outline-none" />
           </div>

           <div className=' part-1 flex items-center space-x-4'>
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 30 31" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM15 8.5C16.66 8.5 18 9.84 18 11.5C18 13.16 16.66 14.5 15 14.5C13.34 14.5 12 13.16 12 11.5C12 9.84 13.34 8.5 15 8.5ZM15 22.7C12.5 22.7 10.29 21.42 9 19.48C9.03 17.49 13 16.4 15 16.4C16.99 16.4 20.97 17.49 21 19.48C19.71 21.42 17.5 22.7 15 22.7Z" fill="#C3CAD9"/>
</svg>
<h2 className='text-[#4D5E80] space-x-4 text-xs font-bold hidden lg:block'>Clayton Santos</h2>
<button className='flex items-center justify-center h-9 w-9 bg-white rounded-full hidden lg:block'>
    
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 30 31" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z" fill="#C3CAD9"/>
</svg>
<div className='h-2 w-2 rounded-full bg-pink-600 mb-4 '></div>
            </button>
            <button className='flex items-center justify-center h-9 w-9 bg-white rounded-full hidden lg:block'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 30 31" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z" fill="#C3CAD9"/>
</svg>
            </button>
           </div>
         
       
    </div>
  )
}

export default Navbar