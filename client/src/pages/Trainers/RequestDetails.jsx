import { GetRequest } from '../../services/RequestServices'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import ReactTimeAgo from 'react-time-ago'
import SendMessageButton from '../../components/Buttons/SendMessageButton'



const RequestDetails = ({ user }) => {
    let { id } = useParams()

    const [request, setRequest] = useState([])

    useEffect(() => {
        const GetRequestDetails = async () => {
            const response = await GetRequest(id, user.username)
            setRequest(response)
        }

        GetRequestDetails()
    }, [])

    console.log(request)
    return (
        <div className="container">
            <div className="card message-list-card h-100 mt-5">
                <div className="card-header themed-card-header">
                    <h5>Request from {request.senderName}</h5>
                </div>
                <div className="card-body">
                    <p>{request.message}</p>
                    <hr className="mt-5" />
                    <div className="message-details-footer text-center">
                        <p><i> Received <ReactTimeAgo date={moment(request.createdAt).format("YYYY-MM-DD HH:mm")} locale={'en-US'} /></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestDetails