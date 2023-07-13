import { BoxArrowInDownLeft, BoxArrowUpRight  } from 'react-bootstrap-icons'
import ReactTimeAgo from 'react-time-ago'


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
                <ReactTimeAgo date={message.createdAt} locale={'en-US'}/>
            </td>
        </>

    )
}

export default SmallMessageCard