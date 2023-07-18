import axios from 'axios'
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

    return (
        <div className="container">
        <div className="card mb-3 card-api-details mt-5">
            <img src={searchResult[0].image_link} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
    )
}

export default ApiDogDetail