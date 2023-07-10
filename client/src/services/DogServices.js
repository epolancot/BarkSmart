import Client from './api'

export const GetDogsByOwnerId = async (id) => {
    try {
        const res = await Client.get('/dog/owner/'+id)
        return res.data
    } catch (error) {
        throw error
    }
}
