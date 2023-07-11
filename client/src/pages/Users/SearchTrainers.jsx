import axios from 'axios'
import Client from '../../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_BACKEND_URL } from '../../services/api'
import { GetTrainers, GetTrainersByZipCode, GetTrainersByName } from '../../services/TrainerServices'
import SearchBox  from '../../components/Search/Shared/SearchBox'
import TrainerSearchResults from '../../components/Search/User/TrainersSearchResults'
import TrainerCard from '../../components/Cards/TrainerCard'



const SearchTrainers = ({ user }) => {
    const [searchResults, setSearchResults] = useState([])
    const [searched, toggleSearched] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [trainersList, setTrainersList] = useState([])

    const searchPlaceholder = "Name or Zip Code"

    useEffect(() => {
        const GetTrainersList = async () => {
                const list = await GetTrainers()
                setTrainersList(list)
        }

        GetTrainersList()
    },[])

    const getSearchResults = async (e) => {
        e.preventDefault()
        if (isNaN(searchQuery)) {
            const TrainersByName = async () => {
                const list = await GetTrainersByName(searchQuery)
                setSearchResults(list)
                toggleSearched(true)
                setSearchQuery('')
            }
            TrainersByName()
        } else {
            const TrainersByZipCode = async () => {
                const list = await GetTrainersByZipCode(searchQuery)
                setSearchResults(list)
                toggleSearched(true)
                setSearchQuery('')
            }
            TrainersByZipCode()

        }
    }
    
    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    let searchResultsSection    

    if (searched) {
        if (searchResults.length === 0) {
            searchResultsSection = <div className="search-message"><h2>No information matching your search criteria found.</h2></div>
        } else {
            searchResultsSection = ""
        }
    }

    return (
        <div className="container">
            <SearchBox onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} placeholder={searchPlaceholder}/>
            <TrainerSearchResults />
            {trainersList.map((trainer) => (
                <div key={trainer._id}>
                    <TrainerCard trainer={trainer}/>
                </div>
            ))}
        </div>
    )
}

export default SearchTrainers