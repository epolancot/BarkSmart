const LoginForm = ({ handleSubmit, handleChange, formValues }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <label className="form-label">Username</label>
                    <input
                        onChange={handleChange} 
                        type="text" 
                        name="username"
                        id="input-username" 
                        className="form-control form-control-lg"
                        placeholder="Enter your username"
                        value={formValues.username}
                        required
                    />
                </div>
                <div className="form-outline mb-3">
                    <label className="form-label">Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password" 
                        id="inputPassword" 
                        className="form-control form-control-lg"
                        placeholder="Enter password" 
                        value={formValues.password}
                        required
                        />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                        <label className="form-check-label">
                            Remember me
                        </label>
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={!formValues.username || !formValues.password}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm