
import React, { FC, useState, useEffect } from 'react'
import type { Message } from '../../types/message'
import type { Conversation } from '../../types/conversation'
import { getLoggedUserId } from '../../utils/getLoggedUserId'
import ConversationHeader from '../../components/ConversationHeader/ConversationHeader'
import ConversationMessage from '../../components/ConversationMessage/ConversationMessage'
import ConversationBody from '../../components/ConversationBody/ConversationBody'
import { getConversationByUser } from '../../utils/getConversationByUser';
import { getConversationList } from '../../utils/getConversationList';
import { postMessage } from '../../utils/postMessage';


import moment from 'moment'

export const loggedUserId = getLoggedUserId()

interface Props {
    /* Coversation id**/
    id: number
}

const InsideConversation: FC<Props> = ({ id}) => {
    const [messagesList, setMessagesList] = useState<Message[]>([])
    const [message, setMessage] = useState('')
    const [recipientNickname, setRecipientNickname] = useState('')

     useEffect(()=>{
        const fetchData = async () => {
        const conversations: Conversation[] = await getConversationList();
        const recipientNickname = conversations.filter(data=> data.id == id)[0].recipientNickname
        setRecipientNickname(recipientNickname);
    };
    fetchData();
     })
    useEffect(() => {
        const fetchData = async () => {
            const messages = await getConversationByUser(id)
            setMessagesList(messages)
        };
        fetchData();
    }, [message]);

    const handleMessageSend = (message: string) => {
        let CurrentDate = moment().unix();
        if (message.length) {
            postMessage(message, CurrentDate, id)
            setMessage(message)
        }
    }
    return (
        <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: "#edf2f7" }}>
            <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                <ConversationHeader recipientNickname={recipientNickname} />
                <ConversationBody messages={messagesList} recipientNickname={recipientNickname} />
                <ConversationMessage handleMessageSend={message => handleMessageSend(message)} />
            </div>
        </div>
    )
}



export const getStaticProps = async ({ params }) => {
    let id = params.id
    return {
        props: {id}
    }
}


export const getStaticPaths = async () => {

    const conversations: Conversation[] = await getConversationList();
    const paths = conversations.map((conversation) => ({
        params: { id: conversation.id.toString() },
    }))

    return { paths, fallback: false }
}

export default InsideConversation