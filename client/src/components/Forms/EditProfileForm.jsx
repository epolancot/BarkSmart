import { useState, formFields } from "react"
const EditProfileForm = ({ profile, formFields }) => {
    const [formValues, setFormValues] = useState(formFields)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setFormValues(formFields)
    }


    console.log(profile.accountType)
    let editForm
    switch (profile.accountType) {
        case "user":
            editForm =
                <div>
                    <form onSubmit={handleSubmit}>
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
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="inputLastName">Last name</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="lastName"
                                    id="inputLastName"
                                    className="form-control"
                                    value={formValues.lastName}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="inputEmail">Email</label>
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
                                <label className="form-label" htmlFor="inputCity">City</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="city"
                                    id="inputCity"
                                    className="form-control"
                                    value={formValues.city}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                                type="submit"
                                className="btn themed-btn btn-lg"
                                disabled={
                                    !formValues.email
                                }
                            >Update</button>
                        </div>
                    </form>
                </div>
                break
        case "trainer":
            editForm =
                <div>
                    <form onSubmit={handleSubmit}>
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
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="inputLastName">Last name</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="lastName"
                                    id="inputLastName"
                                    className="form-control"
                                    value={formValues.lastName}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="inputEmail">Email</label>
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
                                <label className="form-label" htmlFor="inputBio">Bio</label>
                                <textarea
                                    onChange={handleChange}
                                    rows="10"
                                    type="text"
                                    name="bio"
                                    id="inputBio"
                                    className="form-control"
                                    value={formValues.bio}
                                    required
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                                type="submit"
                                className="btn themed-btn btn-lg"
                                disabled={
                                    !formValues.email
                                }
                            >Update</button>
                        </div>
                    </form>
                </div>
            break
        case "dog":
            editForm =
            <div>
                <form onSubmit={handleSubmit}>
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
                            <label className="form-label" htmlFor="inputDob">Date of Birth</label>
                            <input
                                onChange={handleChange}
                                type="date"
                                name="dob"
                                id="inputDob"
                                className="form-control"
                                value={formValues.dob}
                                required
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                            type="submit"
                            className="btn themed-btn btn-lg"
                        >Update</button>
                    </div>
                </form>
            </div>
            break
    }

    return editForm
}

export default EditProfileForm
