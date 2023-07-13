import { BoxArrowInDownLeft, BoxArrowUpRight  } from 'react-bootstrap-icons'
import ReactTimeAgo from 'react-time-ago'
import moment from 'moment'


const SmallMessageCard = ({user, message, css}) => {
    let arrow, contact 
    if (user.id == message.senderId) {
        arrow = <BoxArrowUpRight />
        contact = `@${message.participants[1]}`
    } else {
        arrow = <BoxArrowInDownLeft />
        contact = `@${message.participants[0]}`
    }


    return (

        <>
            <td>
                {arrow}
            </td>
            <td>
                {contact}
            </td>
            <td className="text-center">
                <ReactTimeAgo date={moment(message.createdAt).format("YYYY-MM-DD HH:mm")} locale={'en-US'}/>
            </td>
        </>

    )
}

export default SmallMessageCard