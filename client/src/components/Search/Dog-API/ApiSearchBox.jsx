const ApiSearchBox = ({ onSubmit, onChange, value }) => {
    return (
        <div>
            <form className="input-group mt-5" onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="search"
                    className="form-control rounded"
                    placeholder="Search by breed"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={value}
                    onChange={onChange}
                />
                <button type="submit" className="btn btn-outline-primary">search</button>
            </form>
        </div>
    )
}

export default ApiSearchBox