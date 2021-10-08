import { FC } from 'react'

interface Props {
   recipientNickname: string
}

const ConversationHeader:FC<Props> = ({recipientNickname})=>{
    return (
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="flex items-center space-x-4">
           <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                 <span className="text-gray-700 mr-3">{recipientNickname}</span>
                 <span className="text-green-500">
                    <svg width="10" height="10">
                       <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                    </svg>
                 </span>
              </div>
              <span className="text-lg text-gray-600">You</span>
           </div>
        </div>
     </div>
    )
    }
    
    
    export default ConversationHeader;