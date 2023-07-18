import React from 'react'

const Board =  () =>{
   
  return (
    <div className='h-[750px] w-full bg-[#EDEFF2] font-[Roboto] '>
          <div className='w-full h-[95%]  bg-[#EDEFF2] m-auto mt-4 mr-4 rounded-xl border-2 border-gray-200 overflow-x-auto '>

              <div className='flex justify-between items-center   border-b-2 border-b-gray-200'>
 
                  <div className='flex text-xs mx-4  justify-center items-center  '>
              
                  
               <div  className='flex items-center justify-center m-4 '> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z" fill="#ADB8CC" />
                      </svg> List-items </div> 
                       <div className='flex items-center justify-center m-4'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 16.5H13C13.55 16.5 14 16.05 14 15.5V7.5C14 6.95 13.55 6.5 13 6.5H7C6.45 6.5 6 6.95 6 7.5V15.5C6 16.05 6.45 16.5 7 16.5ZM7 24.5H13C13.55 24.5 14 24.05 14 23.5V19.5C14 18.95 13.55 18.5 13 18.5H7C6.45 18.5 6 18.95 6 19.5V23.5C6 24.05 6.45 24.5 7 24.5ZM17 24.5H23C23.55 24.5 24 24.05 24 23.5V15.5C24 14.95 23.55 14.5 23 14.5H17C16.45 14.5 16 14.95 16 15.5V23.5C16 24.05 16.45 24.5 17 24.5ZM16 7.5V11.5C16 12.05 16.45 12.5 17 12.5H23C23.55 12.5 24 12.05 24 11.5V7.5C24 6.95 23.55 6.5 23 6.5H17C16.45 6.5 16 6.95 16 7.5Z" fill="#3361FF" />
                      </svg>Boards</div> 
                      <div className='flex items-center justify-center m-4'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 7.5H21V6.5C21 5.95 20.55 5.5 20 5.5C19.45 5.5 19 5.95 19 6.5V7.5H11V6.5C11 5.95 10.55 5.5 10 5.5C9.45 5.5 9 5.95 9 6.5V7.5H8C6.89 7.5 6.01 8.4 6.01 9.5L6 23.5C6 24.6 6.89 25.5 8 25.5H22C23.1 25.5 24 24.6 24 23.5V9.5C24 8.4 23.1 7.5 22 7.5ZM22 22.5C22 23.05 21.55 23.5 21 23.5H9C8.45 23.5 8 23.05 8 22.5V12.5H22V22.5ZM10 14.5H12V16.5H10V14.5ZM14 14.5H16V16.5H14V14.5ZM18 14.5H20V16.5H18V14.5Z" fill="#ADB8CC" />
                      </svg>Calendar</div> 
                        <div className='flex items-center justify-center m-4'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.5H11C11.55 21.5 12 21.05 12 20.5C12 19.95 11.55 19.5 11 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5ZM7 16.5H17C17.55 16.5 18 16.05 18 15.5C18 14.95 17.55 14.5 17 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5Z" fill="#ADB8CC" />
                      </svg>Gantt</div> 
                      <div className='flex items-center justify-center m-4'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z" fill="#ADB8CC" />
                      </svg>Timeline</div> 
                        <div className='flex items-center justify-center m-4'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4325 10.35L20.8725 11.79L15.9925 16.67L12.7025 13.38C12.5157 13.1927 12.262 13.0875 11.9975 13.0875C11.733 13.0875 11.4793 13.1927 11.2925 13.38L5.2925 19.39C4.9025 19.78 4.9025 20.41 5.2925 20.8C5.6825 21.19 6.3125 21.19 6.7025 20.8L11.9925 15.5L15.2825 18.79C15.6725 19.18 16.3025 19.18 16.6925 18.79L22.2825 13.21L23.7225 14.65C24.0325 14.96 24.5725 14.74 24.5725 14.3V10C24.5825 9.72 24.3625 9.5 24.0825 9.5H19.7925C19.3425 9.5 19.1225 10.04 19.4325 10.35Z" fill="#ADB8CC" />
                      </svg>Activity</div> 
                   
                   </div>

           
        
      <div className='flex justify-between items-center mx-4 hidden md:block'>
              <input
                  type="text"
                  placeholder="...."
                  className="py-1 bg-white px-2 rounded-full bg-gray-200 focus:outline-none" />
          </div>
         </div>
          <div className='flex  items-center justify-between m-4 '>
              <div className='flex flex-col items-center justify-center '>
                  <div className='h-12 w-48 bg-white rounded-xl flex flex-col '>
                  <h2 className='text-xs font-bold text-gray-400 p-4 '>Project</h2>
                      <div className='h-16 w-48 bg-white rounded-xl  mt-16'>

                   </div>

                      <div className='h-16 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-4'>
                      <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                      </div>
                      <div className='h-16 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-4'>
                      <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                      </div>
                      <div className='h-16 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-4'>
                      <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                      </div>



                  </div>
              </div>

              <div className='flex flex-col items-between justify-center'>
                  <div className='h-12 w-48 bg-white rounded-xl'>
                  <h2 className='text-xs font-bold text-gray-400 p-4'>Project</h2>
                      <div className='h-16 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-16'>
                      <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                      </div>
                      <div className='h-48 w-48 bg-white rounded-xl flex mt-4 '>
                           
                      </div>
                      <div className='h-24 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-4'>
                      <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                      </div>
                      <div className='h-16 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-4'>
                      <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                      </div>
                  </div>
              </div>

              <div className='h-12 w-48 bg-white rounded-xl'>
              <h2 className='text-xs font-bold text-gray-400 p-4'>Project</h2>
                  <div className='h-16 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-16'>
                  <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                  </div>


                  <div className='h-16 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-4'>
                  <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                  </div>

                  <div className='h-40 w-72 bg-white rounded-xl mt-20 ml-16'>
                  </div>
              </div>

              <div className='h-12 w-48 bg-white rounded-xl'>
              <h2 className='text-xs font-bold text-gray-400 p-4'>Project</h2>
                  <div className='h-16 w-48 bg-white rounded-xl flex flex-col p-4 justify-center mt-16'>
                  <h2 className='text-xs font-bold text-gray-400'>Project</h2>
                      <h2 className='text-xs font-bold text-gray-600'>Make money online through</h2>
                  </div>
              </div>

          </div>
</div>
</div>


 
  

);
  }

export default Board;


        

       
            
       
  

  


