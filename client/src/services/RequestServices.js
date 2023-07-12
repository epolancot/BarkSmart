import Client from './api'

export const SendRequest = async (data) => {
    try {
        const res = await Client.post('/requests', data)
        return res.data
    } catch (error) {
        throw error
    }
}