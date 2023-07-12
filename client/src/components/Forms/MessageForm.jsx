import { useState } from 'react'
import { SendMessage } from '../../services/MessageServices'


const MessageForm = ({user, handleCloseMessageForm, sender, recipient}) => {
    const [formValues, setFormValues] = useState({
        recipient: '',
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
                sender: user.username,
                senderType: user.accountType,
                recipient: formValues.recipient,
                body: formValues.message,
                participants: [user.username,formValues.recipient]
            }) 
            setFormValues({
                recipient: '',
                message: '',
            })
            handleCloseMessageForm()   
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputRecipient">Recipient</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="recipient"
                            id="inputRecipient"
                            className="form-control"
                            value={formValues.recipient}
                            required
                        />
                    </div>
                </div>
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
                        disabled={!formValues.recipient ||
                            !formValues.message
                        }
                    >Send</button>
                </div>
                
            </form>
        </div>
    )
}

export default MessageForm