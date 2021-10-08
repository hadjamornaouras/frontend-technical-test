import {getData} from './HttpUtil';
import { getLoggedUserId } from './getLoggedUserId'
import {Conversation} from '../types/conversation'

export const loggedUserId = getLoggedUserId()

export const getConversationList = async ():Promise<Conversation[]> => {
    let result:Array<Conversation> = await getData(`conversations/${loggedUserId}`);
    return result
}

