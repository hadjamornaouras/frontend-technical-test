import React, { FC } from 'react'
import type { Message } from '../../types/message'
import { getLoggedUserId } from '../../utils/getLoggedUserId'

interface Props {
   messages: Message[],
   recipientNickname: string
}

export const loggedUserId = getLoggedUserId()


const ConversationBody: FC<Props> = ({ messages, recipientNickname }) => {
   return (
      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
         {
            messages?.map((message: Message, key: number) => {
               return (
                  <div className="chat-message" key={key}>
                     <span className="recipientName p-4 text-lg text-gray-600">{message.authorId !== loggedUserId && recipientNickname}</span>
                     <div className={`flex items-end ${message.authorId === loggedUserId && 'justify-end'}`} >
                        <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${message.authorId === loggedUserId ? 'order-1 items-end' : 'order-2 items-start'}`}>
                           <div><span className={`px-4 py-2 rounded-lg inline-block rounded-br-none${message.authorId === loggedUserId ? ' bg-blue-600 text-white' : ' bg-gray-300 text-gray-600'}`}>{message.body}</span></div>
                        </div>
                     </div>
                  </div>

               )
            })
         }
      </div>
   )
}

export default ConversationBody;