import { useState } from 'react'
import { RegisterUser, RegisterTrainer } from '../../services/Auth'
import { useNavigate } from 'react-router-dom'

const UserRegistrationForm = ({ type }) => {
    let navigate = useNavigate()
    let signUpTitle, signUpImage

    if (type === "trainer"){
        signUpTitle = "Sign up as trainer"
        signUpImage = "https://i.imgur.com/bzu4M74.jpg"
    } else {
        signUpTitle = "Sign up"
        signUpImage = "https://i.imgur.com/vcIUQqV.png"
    }

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (type === "trainer") {
            await RegisterTrainer({
                username: formValues.username,
                email: formValues.email,
                password: formValues.password
            })

        } else {
            await RegisterUser({
                username: formValues.username,
                email: formValues.email,
                password: formValues.password
            })
        }

        setFormValues({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

        if(type === "trainer"){
            navigate('/trainer/login')
        } else {
            navigate('/user/login')
        }

    }

    return (
        <div>
            <section style={{ backgroundColor: '#FFF' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="text-black">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{signUpTitle}</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="inputUsername">Username</label>
                                                        <input
                                                            onChange={handleChange}
                                                            type="text"
                                                            name="username"
                                                            id="inputUsername"
                                                            className="form-control"
                                                            value={formValues.username}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="inputEmail">Your Email</label>
                                                        <input
                                                            onChange={handleChange}
                                                            type="email"
                                                            name="email"
                                                            id="inputEmail"
                                                            className="form-control"
                                                            value={formValues.email}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="inputPassword">Password</label>
                                                        <input
                                                            onChange={handleChange}
                                                            type="password"
                                                            name="password"
                                                            id="inputPassword"
                                                            className="form-control"
                                                            value={formValues.password}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="inputConfirmPassword">Repeat your password</label>
                                                        <input
                                                            onChange={handleChange}
                                                            type="password"
                                                            name="confirmPassword"
                                                            id="inputConfirmPassword"
                                                            className="form-control"
                                                            value={formValues.confirmPassword}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="checkBoxTos" required />
                                                    <label className="form-check-label" htmlFor="checkBoxTos">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-lg"
                                                        disabled={!formValues.username ||
                                                            !formValues.email ||
                                                            !formValues.password ||
                                                            !formValues.confirmPassword
                                                        }
                                                    >Register</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src={signUpImage}
                                                className="img-fluid sign-up-image" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserRegistrationForm