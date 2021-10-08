const baseUrl = 'http://localhost:3005/';
/**
 * GET Async call
 * @param url URL to call
 */
export const getData = async<T>(url: string): Promise<T> => {
    return fetchAsync(url, 'GET')
}

/**
 * POST Async call
 * @param url URL to call
 * @param body Payload to pass as body  
 */
export const postData = <T>(url: string, body: object) => {
    return fetchAsync(url, 'POST', body)
}

/**
 * PUT Async call
 * @param url URL to call
 * @param body Payload to pass as body  
 */
export const putData = <T>(url: string, body: object) => {
    return fetchAsync(url, 'PUT', body)
}

/**
 * DELETE Async call
 * @param url URL to call
 * @param body Payload to pass as body  
 */
export const deleteData = <T>(url: string, body?: object) => {
    return fetchAsync(url, 'DELETE', body)
}


const fetchAsync = async <T>(url: string, method: string, body?: object): Promise<T> => {
    return await fetch(baseUrl + url, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: body ? JSON.stringify(body) : undefined
    })
        .then((response) => {
            let data
            try {
                data = response.json()
            } catch (error) {
                console.log('error', error)
                data = {}
            }
            return {
                data,
                response,
            }
        })
        .then(createReturn)
}

function createReturn({ response, data }) {
    if (response.ok) {
        return data
    }
    switch (response?.status) {
        case StatusCode.NotFound:
            throw StatusNotFound
        case StatusCode.Unauthorized:
            throw StatusUnauthorized
        case StatusCode.TooManyRequests:
            throw StatusTooManyRequests
        case StatusCode.ServerError:
            throw StatusServerError
        case StatusCode.BadGateway:
            throw StatusBadGatewayr
        case StatusCode.ServiceUnavailable:
            throw StatusServiceUnavailable
        case StatusCode.Forbidden:
            throw StatusForbidden
        default:
            throw StatusUnexpected
    }
}

export const StatusUnexpected = new Error('unexpected Error')
export const StatusExpired = new Error('expired')
export const StatusForbidden = new Error('Unauthorized request.The client does not have access rights to the content')
export const StatusNotFound = new Error('not Found')
export const StatusUnauthorized = new Error('Indicates that the request requires user authentication information. The client MAY repeat the request with a suitable Authorization header field')
export const StatusTooManyRequests = new Error('Too Many Requests')
export const StatusServerError = new Error('Server Error')
export const StatusBadGatewayr = new Error('Bad Gateway')
export const StatusServiceUnavailable = new Error('he server is not ready to handle the request')


export enum StatusCode {
    OK = 200,
    MovePermanently = 301,
    Found = 302,
    TooManyRequests = 429,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ServerError = 500,
    BadGateway = 501,
    ServiceUnavailable = 503,
}