import { Link } from 'react-router-dom'

const TrainerCard = ({trainer}) => {
    return (
        <Link to={`/trainer/id/${trainer._id}`} style={{textDecoration: 'none'}}>
        <div className="card mt-3 short-card">
            <div className="row">
                <div className="col-4 text-center">
                    <img src={trainer.avatar} className="short-card-avatar mt-2" />
                </div>
                <div className="col-8 mt-4">
                    <p>{trainer.name} {trainer.lastName}</p>
                    <p>{trainer.experience}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default TrainerCard