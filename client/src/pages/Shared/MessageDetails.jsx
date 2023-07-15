import { GetMessage } from '../../services/MessageServices'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import ReactTimeAgo from 'react-time-ago'

const MessageDetails = ({ user }) => {
    let { id } = useParams()

    const [message, setMessage] = useState([])
    const [options, setOptions] = useState([])

    useEffect(() => {
        const GetMessageDetails = async () => {
            const response = await GetMessage(id, user.username)
            setMessage(response.message)
            setOptions(response.options)
        }

        GetMessageDetails()
    }, [])

    return (
        <div className="container">
            <div className="card message-list-card h-100 mt-5">
                <div className="card-header themed-card-header">
                    <h5>{options.cardTitle}</h5>
                </div>
                <div className="card-body">
                    <p>{message.body}</p>
                    <hr className="mt-5" />
                    <div className="message-details-footer text-center">
                        <p><i>{options.direction} <ReactTimeAgo date={moment(message.createdAt).format("YYYY-MM-DD HH:mm")} locale={'en-US'} /></i></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MessageDetails