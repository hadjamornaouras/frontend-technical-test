
import React, { FC } from 'react'
import {useState} from 'react'


interface Props{
   handleMessageSend: (message:string) => void
}

const ConversationMessage:FC<Props>  = ({handleMessageSend})=>{
   
   const [message,setMessage]=useState('');

   const handleClick = ()=>{
      handleMessageSend(message);
      setMessage('')
   }
   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      const value = e.target.value
      setMessage(value)
   }
   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter'){
         handleClick()
      }
    }
    return (
        <div className="border-t-2 border-gray-200  pt-4 mb-2 sm:mb-0">
               <div className="relative flex">
                  <input
                   type="text"
                   placeholder="Write Something"
                   className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
                   onChange={handleOnChange}
                   value={message}
                   onKeyPress={handleKeyPress}
                    />
                  <div className="absolute right-0 items-center  sm:flex">
                     <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 transform rotate-90">
                           <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
    )
}

export default ConversationMessage;