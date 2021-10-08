import {getData} from './HttpUtil';
import { getLoggedUserId } from './getLoggedUserId'
import {Message} from '../types/message'

export const loggedUserId = getLoggedUserId()

export const getConversationByUser = async (id:number):Promise<Message[]> => {
    let result:Array<Message> = await getData(`messages/${id}`);
    return result
}

