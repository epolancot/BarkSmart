import ApiSearchDogCard from './ApiSearchDogCard'

const ApiSearchResults = ({ user, searchResults }) => {
    return (
        <div className="api-search-results-grid">
            {searchResults.map((dog, id)=>(
                <div key={id}>
                <ApiSearchDogCard dog={dog} user={user} />
                </div>
            ))}
        </div>
    )
}

export default ApiSearchResults