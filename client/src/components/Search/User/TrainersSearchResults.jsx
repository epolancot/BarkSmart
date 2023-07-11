import TrainerCard from '../../Cards/TrainerCard'

const TrainerSearchResults = ({searchResults}) => {
    return (
        <div>
                {searchResults.map((trainer) => (
                <div key={trainer._id}>
                    <TrainerCard trainer={trainer}/>
                </div>
            ))}
            
        </div>
    )
}

export default TrainerSearchResults