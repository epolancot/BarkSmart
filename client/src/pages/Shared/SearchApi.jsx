import ApiSearchResults from '../../components/Search/Dog-API/ApiSearchResults'
import SearchBox from '../../components/Search/Shared/SearchBox'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../../components/Globals'
import { DOG_API_KEY } from '../../Api-key'

const SearchApi = (user) => {
    const [searchResults, setSearchResults] = useState([])
    const [searched, toggleSearched] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const getSearchResults = async (e) => {
        e.preventDefault()
        const searchResponse = await axios.get(`${BASE_URL}name=${searchQuery}`, {
            headers: {
                'X-Api-Key': DOG_API_KEY
            }
        })
        setSearchResults(searchResponse.data)
        toggleSearched(true)
        setSearchQuery('')
    }

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    let searchResultsSection, headerSpace
    if (searched) {
        headerSpace = ""
        if (searchResults.length === 0) {
            searchResultsSection = <div className="search-message"><h2>No information matching your search criteria found.</h2></div>
        } else {
            searchResultsSection = <ApiSearchResults searchResults={searchResults} user={user}/>
        }
    } else {
        headerSpace = 
        <div className="landing-header text-center">
            <h3>Learn more about your dog!</h3>
        </div>
    }

    return (
        <div className="container">
            {headerSpace}
            <SearchBox onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} placeholder="Search dog breeds" />
            <div className="d-flex justify-content-center">
                {searchResultsSection}
            </div>
        </div>

    )
}

export default SearchApi