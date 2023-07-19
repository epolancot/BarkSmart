import { SendRequest } from '../../services/RequestServices'
import { useState } from 'react'


const RequestForm = ({ sender, recipient, handleCloseRequestForm }) => {
    const [formValues, setFormValues] = useState({
        name: sender.name,
        email: sender.email,
        phone: '',
        dog: '',
        message: '',
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await SendRequest({
                status: 'sent',
                senderId: sender.id,
                senderName: formValues.name,
                recipientId: recipient.id,
                recipientName: recipient.name,
                phone: formValues.phone,
                message: formValues.message,
                dog: formValues.dog,
                participants: [sender.username, recipient.username]
            })

            console.log(formValues)
            setFormValues({
                message: '',
            })
            handleCloseRequestForm()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputName">Your Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            id="inputName"
                            className="form-control"
                            value={formValues.name}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputEmail">Your Email</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="email"
                            id="inputEmail"
                            className="form-control"
                            value={formValues.email}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputPhone">Your Phone (optional)</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="phone"
                            id="inputPhone"
                            className="form-control"
                            value={formValues.phone}
                        />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="select-dog">Dog's profile</label>
                        <select className="form-select"
                            aria-label="Select"
                            id="select-dog"
                            name="dog"
                            onChange={handleChange}
                            value={formValues.dog}
                            >
                            {sender.dogs.map((dog) => (
                                <option value={dog._id} key={dog._id}>{dog.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputMessage">Message</label>
                        <textarea
                            onChange={handleChange}
                            rows="7"
                            type="text"
                            name="message"
                            id="inputMessage"
                            className="form-control"
                            value={formValues.message}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                        type="submit"
                        className="btn themed-btn btn-lg"
                    >Send</button>
                </div>
            </form>
        </div>
    )
}

export default RequestForm