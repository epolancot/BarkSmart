import Client from './api'

export const uploadPicture = async (data) => {
    try {
        const res = await Client.post('/pictures/s3', data)
        return res.data
    } catch (error) {
        throw error
    }
}
