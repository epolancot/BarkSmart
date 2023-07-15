import TableRowMessage from '../TableRowMessage'
import { ChatLeftText } from 'react-bootstrap-icons'
import { GetUserMessages } from '../../services/MessageServices'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"

const MessageListCard = ({ user }) => {
    const navigate = useNavigate();
    const [userMessages, setUserMessages] = useState([])

    useEffect(() => {
        const getMessages = async () => {
            const response = await GetUserMessages(user.username)
            setUserMessages(response)
        }
        getMessages()
    }, [])

    const handleRowClick = (id) => {
        navigate(`/messages/id/${id}`)
    }
    return (
        <div>
            <div className="card message-list-card h-100">
                <div className="card-header themed-card-header">
                    <h5><ChatLeftText /> Messages</h5>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userMessages.map((message) => (
                                <tr onClick={() => handleRowClick(message._id)}>
                                    <TableRowMessage message={message} user={user} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MessageListCard