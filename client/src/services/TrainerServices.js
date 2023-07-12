import Client from './api'

export const GetTrainer = async (id) => {
    try {
        const res = await Client.get('profiles/trainers/id/'+id)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetTrainers = async () => {
    try {
        const res = await Client.get('profiles/trainers')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetTrainersByZipCode = async (query) => {
    try {
        const res = await Client.get('profiles/trainers/zip/'+query)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetTrainersByName = async (query) => {
    try {
        const res = await Client.get('profiles/trainers/query/'+query)
        return res.data
    } catch (error) {
        throw error
    }
}
