
import type { FC } from 'react'
import image from '../../assets/Images/avatar.jpg'
import Image from 'next/image'
import type { Conversation } from '../../types/conversation'
import moment from 'moment'
import Link from 'next/link'

export interface ConversationsProps {
  conversation: Conversation;
  handleDeleteConversation: (id: number) => void
}

const Item: FC<ConversationsProps> = ({ conversation, handleDeleteConversation }) => {

  const lastMessageTime = (time: number) => {
    let lastMessageTime = moment(time).format('MMMM D');
    return lastMessageTime
  }
  const handleDelete = () => {
    handleDeleteConversation(conversation.id)
  }
  return (
    <div className="px-6 grid grid-flow-row auto-rows-max grid-cols-12">
        <Link href={`/InsideConversation/${conversation.id}`}>
        <a className="flex justify-between col-span-10 items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">

            <div className="flex items-center">
              <Image className="rounded-full h-12 w-12" src={image} alt="avatar" width={50} height={50} />
              <div className="ml-2">
                <div className="text-sm font-semibold text-gray-600">{conversation.recipientNickname}</div>
                <div className="text-sm font-light text-gray-500">{lastMessageTime(conversation.lastMessageTimestamp)}</div>
              </div>
            </div>
            <div>

            </div>

            </a>
        </Link>
      <a col-span-2="true">
        <div className="flex justify-between items-center h-16 p-4 my-6">
          <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow-md" onClick={handleDelete}>
            <svg className="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </a>
    </div>
  )
}


export default Item