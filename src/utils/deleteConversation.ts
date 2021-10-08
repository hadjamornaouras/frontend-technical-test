import {deleteData} from './HttpUtil';


export const deleteConversation = async (conversationId:number) => {
    return await deleteData(`conversation/${conversationId}`);

}

