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
                const res = await Client.get('profiles/trainers/id/'+id)
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

export const UpdateProfile = async (profileInfo, data) => {
    switch (profileInfo.accountType) {
        case 'user':
            try {
                const res = await Client.put('profiles/users/'+profileInfo.id, data)
                return res.data
            } catch (error) {
                throw error
            }
            break
        case 'trainer':
            try {
                const res = await Client.put('profiles/trainers/id/'+profileInfo.id, data)
                return res.data
            } catch (error) {
                throw error
            }
            break
        case 'dog':
            try {
                const res = await Client.put('dog/'+profileInfo.id, data)
                return res.data
            } catch (error) {
                throw error
            }
    }
}

export const DeleteProfile = async (id) => {
    try {
        const res = await Client.delete(`/dog/${id}`)
        return res.data
    } catch (error) {   
        throw error
    }
}

export const updateUser = async (id, data) => {
    try {
        const res = await Client.put(`/users/${id}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}