import { Search } from 'react-bootstrap-icons'

const SearchBox = ({ onSubmit, onChange, value, placeholder }) => {
    return (
        <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-6">
                <form className="search-box" onSubmit={onSubmit}>
                    <Search className="search-icon" />
                    <input
                        onChange={onChange}
                        name="inputSearchBox"
                        type="text"
                        className="form-control form-input"
                        placeholder={placeholder}
                        value={value}
                    />
                    <button type="submit" className="btn themed-btn">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBox