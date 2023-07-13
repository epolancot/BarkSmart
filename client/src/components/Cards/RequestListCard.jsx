import { useState, useEffect } from "react"
import { GetRequests } from '../../services/RequestServices'
import { PersonFillAdd } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const RequestListCard = ({ user }) => {
    const navigate = useNavigate();
    const [requests, setRequests] = useState([])

    useEffect(() => {
        const getMessages = async () => {
            const response = await GetRequests(user.id)
            setRequests(response)
        }
        getMessages()
    }, [])

   const handleRowClick = (id) => {
    navigate(`/request/id/${id}`)
   }
    return (
        <div>
            <div className="card message-list-card h-100">
                <div className="card-header themed-card-header">
                    <h5><PersonFillAdd /> Requests</h5>
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
                            {requests.map((request) => (
                                    <tr onClick={()=> handleRowClick(request._id)}>
                                        <TableRowRequest request={request} user={user} />
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                        </div>
                </div>
            </div>
            )
}

            export default RequestListCard