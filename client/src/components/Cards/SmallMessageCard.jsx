const SmallMessageCard = ({messages}) => {
    return (
        <div>
            {messages.map((message) => (
                <div key={message.id}>
                    {message.sender}
                </div>
            ))}
        </div>
    )
}

export default SmallMessageCard