const ApiSearchDogCard = ({dog}) => {

    return (
        <div className="card results-card mt-5" style={{width: '18rem'}}>
        <img src={dog.image_link} className="card-img-top" alt={dog.name}/>
            <div className="card-body text-center">
                <h5 className="card-title">{dog.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Energy:</b> {dog.energy}</li>             
                <li className="list-group-item"><b>Trainability:</b> {dog.trainability}</li>
                <li className="list-group-item"><b>Protectiveness:</b> {dog.protectiveness}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
    </div>
    )
}

export default ApiSearchDogCard