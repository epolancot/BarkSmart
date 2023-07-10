import ApiSearchDogCard from './ApiSearchDogCard'

const ApiSearchResults = ({ searchResults }) => {
    return (
        <div className="api-search-results-grid">
            {searchResults.map((dog, id)=>(
                <div key={id}>
                <ApiSearchDogCard dog={dog} />
                </div>
            ))}
        </div>
    )
}

export default ApiSearchResults