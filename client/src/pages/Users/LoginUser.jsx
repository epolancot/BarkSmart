import LoginForm from '../../components/Forms/LoginForm'
import { Link, useNavigate } from "react-router-dom";
import { SignInUser } from '../../services/Auth'
import { useState } from 'react'

const LoginUser = ({setUser}) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ username: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ username: '', password: '' })
        setUser(payload)
        navigate(`/user/home/${payload.id}`)
    
    }

    return (
        <section className="mt-5">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5 text-center">
                        <img src="https://i.imgur.com/zZh2pWM.jpg"
                            className="img-fluid login-image" alt="Dog Image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} formValues={formValues}/>
                        <div className="text-center text-lg-start mt-4 pt-2">
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/user/register" className="link-danger">Register</Link></p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginUser