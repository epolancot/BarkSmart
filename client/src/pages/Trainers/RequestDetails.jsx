import moment from 'moment'
import ReactTimeAgo from 'react-time-ago'
import SendMessageButton from '../../components/Buttons/SendMessageBtn'
import { GetRequest } from '../../services/RequestServices'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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


    const sender = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        type: user.accountType
    }

    const recipient = {
        id: request.senderId._id,
        username: request.senderId.username,
        name: request.senderId.name,
        email: request.senderId.email,
        type: request.senderId.accountType
    }

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
                <div>
                    <SendMessageButton sender={sender} recipient={recipient}/>
                </div>
            </div>
        </div>
    )
}

export default RequestDetails