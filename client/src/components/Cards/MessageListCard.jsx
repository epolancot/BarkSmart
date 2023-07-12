import { useState, useEffect } from "react"
import { GetUserMessages } from '../../services/MessageServices'
import { ChatLeftText } from 'react-bootstrap-icons'
import { Button, Modal } from "react-bootstrap"
import TableRowMessage from '../TableRowMessage'

const MessageListCard = ({ user }) => {
    const [showMessageForm, setShowMessageForm] = useState(false);
    const [userMessages, setUserMessages] = useState([])

    useEffect(() => {
        const getMessages = async () => {
            const response = await GetUserMessages(user.username)
            setUserMessages(response)
        }
        getMessages()
    }, [])

    const handleCloseMessageForm = () => setShowMessageForm(false);
    const handleShowMessageForm = () => setShowMessageForm(true);

console.log(userMessages)
    return (
        <div>
            <div className="card message-list-card h-100">
                <div className="card-header themed-card-header">
                    <h5><ChatLeftText /> Messages</h5>
                </div>
                <div className="card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userMessages.map((message) => (
                                    <TableRowMessage message={message} user={user} />
                            ))}
                        </tbody>
                    </table>
                        </div>
                </div>
            </div>
            )
}

            export default MessageListCard