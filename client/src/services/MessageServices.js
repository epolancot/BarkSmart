import Client from './api'

export const SendMessage = async (data) => {
    try {
        const res = await Client.post('/messages', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetUserMessages = async (username) => {
    try {
        const res = await Client.get('/messages/user/'+username)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetMessage = async (id,user) => {
    try {
        const res = await Client.get(`/messages/s/${user}/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}