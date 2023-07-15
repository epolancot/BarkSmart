import SearchBox from '../../components/Search/Shared/SearchBox'

const Landing = ({user}) => {
    return (
        <div className="container">
            <div className="main-search">
            <SearchBox placeholder="Search dog breeds" />
            </div>
        </div>
    )
}

export default Landing