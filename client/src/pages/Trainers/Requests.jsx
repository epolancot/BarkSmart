import RequestListCard from '../../components/Cards/RequestListCard'

const Requests = ({user}) => {
    return (
        <div className="container mt-5">
            <RequestListCard user={user}/>
        </div>
    )
}

export default Requests