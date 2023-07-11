import TrainerCard from '../../Cards/TrainerCard'

const DefaultResultsSection = ({trainersList}) => {
    return (
        <div>
            {trainersList.map((trainer) => (
                <div key={trainer._id}>
                    <TrainerCard trainer={trainer}/>
                </div>
            ))}
        </div>
    )
}

export default DefaultResultsSection