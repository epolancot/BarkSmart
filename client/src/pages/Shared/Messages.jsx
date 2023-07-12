import MessageListCard from '../../components/Cards/MessageListCard'

const Messages = ({user}) => {
    return (
            <div className="container mt-5 justify-content-center">
                <MessageListCard user={user} />    
            </div>
        )
}

            export default Messages 
