import SearchBox  from '../../components/Search/Shared/SearchBox'
import TrainerSearchResults from '../../components/Search/User/TrainersSearchResults'
import DefaultResultsSection from '../../components/Search/User/DefaultResultsSection'
import { GetTrainers, GetTrainersByZipCode, GetTrainersByName } from '../../services/TrainerServices'
import { useState, useEffect } from 'react'






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

    let searchResultsSection = "" 
    let defaultResultsSection 
    
    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    if (searched) {
        if (searchResults.length === 0) {
            searchResultsSection = <div className="search-message mt-5 text-center"><h2>No trainer matching your search criteria found.</h2></div>
            defaultResultsSection = ""
        } else {
            searchResultsSection = <TrainerSearchResults searchResults={searchResults}/>
            defaultResultsSection = ""
        }
    } else {
        defaultResultsSection = <DefaultResultsSection trainersList={trainersList} />
    }

    return (
        <div className="container">
            <SearchBox onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} placeholder={searchPlaceholder}/>
            {searchResultsSection}
            {defaultResultsSection}
        </div>
    )
}

export default SearchTrainers