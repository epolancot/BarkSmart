import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../components/Globals'
import { DOG_API_KEY } from '../Api-key'
import ApiSearchBox from '../components/Search/Dog-API/ApiSearchBox'
import ApiSearchResults from '../components/Search/Dog-API/ApiSearchResults'

const SearchApi = () => {
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

    let searchResultsSection

    if (searched) {
        if (searchResults.length === 0) {
            searchResultsSection = <div className="search-message"><h2>No information matching your search criteria found.</h2></div>
        } else {
            searchResultsSection = <ApiSearchResults searchResults={searchResults} />
        }
    }

    return (
        <div className="container">
            <ApiSearchBox onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
            <div className="d-flex justify-content-center">
                {searchResultsSection}
            </div>
        </div>

    )
}

export default SearchApi