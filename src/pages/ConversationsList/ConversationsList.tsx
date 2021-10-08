import { useState, useEffect } from 'react'
import Item from '../../components/Item/Item';
import Loading from '../../components/Loading/Loading';
import type { Conversation } from '../../types/conversation'
import { getLoggedUser } from '../../utils/getLoggedUserId'
import Link from 'next/link'
import { getConversationList } from '../../utils/getConversationList';
import { deleteConversation } from '../../utils/deleteConversation';


const ConversationsList = () => {

    const [conversationsList, setConversationsList] = useState<Conversation[]>([]);
    const [user, setUser] = useState('');
    useEffect(() => {
        (async () => {
            const user = await getLoggedUser()
            setUser(user.map(res => res.nickname)[0])
            const data = await getConversationList()
            setConversationsList(data)
        })()
    }, [])

    const handleDeleteConversation =  (id: number) => {
        //deleteConversation(id);
    }
    return (
            <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: "#edf2f7" }}>
                <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
                    <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
                        <div className="h-12 flex justify-between items-center border-b border-gray-200 m-4">
                            <div>
                                <div className="text-xl font-bold text-gray-700">{user}</div>
                            </div>
                        </div>
                        {
                            conversationsList.length ?
                                conversationsList.map((data: Conversation, key) =>

                                    <Item conversation={data} handleDeleteConversation={handleDeleteConversation} key={key} />

                                )
                                :
                                <Loading />
                        }
                    </div>
                </div>
            </div>
    )
}

export default ConversationsList


