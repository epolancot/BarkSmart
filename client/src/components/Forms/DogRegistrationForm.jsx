import { RegisterDog } from '../../services/Auth'
import { useState } from 'react'

const UserRegistrationForm = ({ id, handleCloseRegistration }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        breed: '',
        age: '',
        weight: '',
        height: '',
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterDog({
            name: formValues.name,
            breed: formValues.breed,
            age: formValues.age,
            weight: formValues.age,
            height: formValues.age,
            owner: id,
        })

        setFormValues({
            name: '',
            breed: '',
            age: '',
            weight: '',
            height: '',
        })

        handleCloseRegistration()

    }

    return (
        <div>
            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputName">Name</label>
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
                        <label className="form-label" htmlFor="inputBreed">Breed</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="breed"
                            id="inputBreed"
                            className="form-control"
                            value={formValues.breed}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputAge">Age</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="age"
                            id="inputAge"
                            className="form-control"
                            value={formValues.age}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputWeight">Weight</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="Weight"
                            id="inputWeight"
                            className="form-control"
                            value={formValues.weight}
                            placeholder='Optional'
                        />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputHeight">Height</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="Height"
                            id="inputHeight"
                            className="form-control"
                            value={formValues.height}
                            placeholder='Optional'
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                        type="submit"
                        className="btn themed-btn"
                        disabled={!formValues.name ||
                            !formValues.breed ||
                            !formValues.age
                        }
                    >Register</button>
                </div>
            </form>
        </div>
    )
}

export default UserRegistrationForm