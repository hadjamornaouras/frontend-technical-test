import {postData} from './HttpUtil';
import { getLoggedUserId } from './getLoggedUserId'

export const authorId = getLoggedUserId()

export const postMessage = async (body:string,timestamp:number,conversationId:number) => {
    let payload ={
        conversationId,
        timestamp,
        authorId,
        body
    }
    return await postData(`message/${conversationId}`,payload);
    
}

