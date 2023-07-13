import Client from './api'

export const SendRequest = async (data) => {
    try {
        const res = await Client.post('/requests', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetRequests = async (username) => {
    try {
        const res = await Client.get('/requests/user/'+username)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetRequest = async (id) => {
    try {
        const res = await Client.get(`/requests/id/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}


