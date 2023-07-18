import ApiProgressBar from '../Dog-API/ApiProgresBar'
import {Link} from 'react-router-dom'

const ApiSearchDogCard = ({ user, dog }) => {
    const formTitle = 'Select Picture'

    let traitsFilter, buffer
    let dogTraits = []

    buffer = Object.entries(dog)
    traitsFilter = buffer.map((trait) => {
        switch (trait[0]) {
            case "protectiveness":
                dogTraits.push(trait)
                break
            case "energy":
                dogTraits.push(trait)
                break
            case "trainability":
                dogTraits.push(trait)
                break
            case "barking":
                dogTraits.push(trait)
                break
        }
    })


    return (
        <Link to={`search-api/dog/${dog.name}`} className="link">
        <div className="card results-card mt-5" style={{ width: '18rem' }}>
            <img src={dog.image_link} className="card-img-top" alt={dog.name} />
            <div className="card-body text-center">
                <h5 className="card-title">{dog.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                {dogTraits.map((trait) => (
                    <li className="list-group-item">
                        <ApiProgressBar trait={trait} />
                    </li>
                ))}
            </ul>
        </div>
        </Link>
    )
}

export default ApiSearchDogCard