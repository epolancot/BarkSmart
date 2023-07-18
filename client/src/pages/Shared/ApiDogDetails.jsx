import axios from 'axios'
import ApiProgressBar from '../../components/Search/Dog-API/ApiProgresBar'
import { BASE_URL } from '../../components/Globals'
import { DOG_API_KEY } from '../../Api-key'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const ApiDogDetail = ({ user }) => {
    const [searchResult, setSearchResult] = useState([])
    const navigate = useNavigate()

    let { name } = useParams()

    useEffect(() => {
        if (!user) {
            navigate("/user/login")
        } else {
            getDog(name)
        }
    }, []);

    const getDog = async (name) => {
        const searchResponse = await axios.get(`${BASE_URL}name=${name}`, {
            headers: {
                'X-Api-Key': DOG_API_KEY
            }
        })
        setSearchResult(searchResponse.data)
    }

    const dog = searchResult[0]

    let traitsFilter, buffer
    let dogTraits = []

    let description, image, dogName
    if (dog) {
        image = dog.image_link
        dogName = dog.name
        
        let minimumHeight
        if (dog.min_height_male === dog.min_height_female) {
            minimumHeight = `Their minimum height is ${dog.min_height_male} inches for both, males and females,`
        } else {
            minimumHeight = `Their minimum height is ${dog.min_height_male} for males and ${dog.min_height_female} for females,`
        }

        let maximumHeight
        if (dog.max_height_male === dog.max_height_female) {
            maximumHeight = `${dog.max_height_male} inches.`
        } else {
            maximumHeight = `${dog.max_height_male} and ${dog.max_height_female} respectively.`
        }
        description = <p className="card-text">{dog.name}`s have a minimum life expectancy of {dog.min_life_expectancy} years and a maximum life expectancy of {dog.max_life_expectancy} years.{' '}
        {`${minimumHeight} with a maximum height of ${maximumHeight}`}</p>

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
                case "playfulness":
                    dogTraits.push(trait)
                    break
                case "grooming":
                    dogTraits.push(trait)
                    break
                case "drooling":
                    dogTraits.push(trait)
                    break
                case "shedding":
                    dogTraits.push(trait)
                    break
                case "good_with_strangers":
                    dogTraits.push(trait)
                    break
                case "good_with_children":
                    dogTraits.push(trait)
                    break
                case "good_with_other_dogs":
                    dogTraits.push(trait)
                    break
            }
        })
    }

    return (
        <div className="container">
            <div className="card mb-3 card-api-details mt-5">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{dogName}</h5>
                    {description}
                <hr />
                <div className="container">
                <div className="mt-3 mb-4 text-center"><h3>Traits</h3></div>
                {dogTraits.map((trait, id) => (
                    <div className="list-group-item mb-3" key={id}>
                        <ApiProgressBar trait={trait} />
                    </div>
                ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default ApiDogDetail