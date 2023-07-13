import ReactTimeAgo from 'react-time-ago'
import moment from 'moment'

const TableRowRequest = ({user, request, css}) => {
    const message = request.substring(0,10) + '...'
    return (

        <>
            <td>
                {request.senderName}
            </td>
            <td>
                {message}
            </td>
            <td className="text-center">
                <ReactTimeAgo date={moment(request.createdAt).format("YYYY-MM-DD HH:mm")} locale={'en-US'}/>
            </td>
        </>

    )
}

export default TableRowRequest