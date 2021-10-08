import type { User } from '../types/user'
import {getData} from './HttpUtil'
// Default way to use a logged user
// Feel free to update the user ID for your tests
// or enhance it with better data source, or better user management
export const getLoggedUserId = ():User['id'] => 1


export const loggedUserId = getLoggedUserId();

export const getLoggedUser = async():Promise<User[]>=>{
    let result:User[] = await getData(`user/${loggedUserId}`);
    return result
}

