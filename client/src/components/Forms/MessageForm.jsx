import { SendMessage } from '../../services/MessageServices'
import { useState } from 'react'



const MessageForm = ({handleCloseMessageForm, sender, recipient}) => {
    const [formValues, setFormValues] = useState({
        message: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await SendMessage({
                status: 'sent',
                senderId: sender.id,
                senderName: sender.name,
                senderType: sender.type,
                recipientId: recipient.id,
                recipientName: recipient.name,
                recipientType: recipient.type,
                body: formValues.message,
                participants: [sender.username,recipient.username]
            }) 
            setFormValues({
                message: '',
            })
            handleCloseMessageForm()   
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <div className="message-form-header mb-3">
                To: @{recipient.username}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputMessage">Message</label>
                        <textarea
                            onChange={handleChange}
                            type="text"
                            name="message"
                            id="inputMessage"
                            className="form-control"
                            value={formValues.message}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={!formValues.message}
                    >Send</button>
                </div>
                
            </form>
        </div>
    )
}

export default MessageForm