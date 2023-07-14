import Client from './api'

export const GetProfile = async (id, accountType) => {
    switch (accountType) {
        case 'user':
            try {
                const res = await Client.get('profiles/users/'+id)
                return res.data
            } catch (error) {
                throw error
            }
            break
        case 'trainer':
            try {
                const res = await Client.get('profiles/trainers/'+id)
                return res.data
            } catch (error) {
                throw error
            }
            break
        case 'dog':
            try {
                const res = await Client.get('dog/'+id)
                return res.data
            } catch (error) {
                throw error
            }
    }
}