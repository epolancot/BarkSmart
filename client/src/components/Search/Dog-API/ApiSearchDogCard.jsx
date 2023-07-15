
const ApiSearchDogCard = ({ dog }) => {
    let energyBg, energyPercentage
    let trainabilityBg, trainabilityPercentage
    let protectivenessBg, protectivenessPercentage

    switch (dog.energy) {
        case 5:
            energyPercentage = {width: "100%"}
            energyBg = 'bg-success'
            break
        case 4:
            energyPercentage = {width: "80%"}
            energyBg = 'bg-success'
            break
        case 3:
            energyPercentage = {width: "60%",}
            energyBg = 'bg-primary'
            break
        case 2:
            energyPercentage = {width: "40%",}
            energyBg = 'bg-primary'
            break
        case 1:
            energyPercentage = {width: "20%",}
            energyBg = 'bg-warning'
            break
        default:
            energyPercentage = {width: "0%",}
    }

    switch (dog.trainability) {
        case 5:
            trainabilityPercentage = {width: "100%"}
            trainabilityBg = 'bg-success'
            break
        case 4:
            trainabilityPercentage = {width: "80%"}
            trainabilityBg = 'bg-success'
            break
        case 3:
            trainabilityPercentage = {width: "60%"}
            trainabilityBg = 'bg-primary'
            break
        case 2:
            trainabilityPercentage = {width: "40%"}
            trainabilityBg = 'bg-primary'
            break
        case 1:
            trainabilityPercentage = {width: "20%"}
            trainabilityBg = 'bg-warning'
            break
        default:
            trainabilityPercentage = {width: "0%"}
    }

    switch (dog.protectiveness) {
        case 5:
            protectivenessPercentage = {width: "100%"}
            protectivenessBg = 'bg-success'
            break
        case 4:
            protectivenessPercentage = {width: "80%"}
            protectivenessBg = 'bg-success'
            break
        case 3:
            protectivenessPercentage = {width: "60%"}
            protectivenessBg = 'bg-primary'
            break
        case 2:
            protectivenessPercentage = {width: "40%"}
            protectivenessBg = 'bg-primary'
            break
        case 1:
            protectivenessPercentage = {width: "20%"}
            protectivenessBg = 'bg-warning'
            break
        default:
            protectivenessPercentage = {width: "0%"}
    }
    return (
        <div className="card results-card mt-5" style={{ width: '18rem' }}>
            <img src={dog.image_link} className="card-img-top" alt={dog.name} />
            <div className="card-body text-center">
                <h5 className="card-title">{dog.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="progress progress-bar-bg" role="progressbar" aria-label="Energy" aria-valuenow={dog.energy} aria-valuemin="0" aria-valuemax="5">
                        <div className={`progress-bar overflow-visible ${energyBg}`} style={energyPercentage}>Energy</div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="progress progress-bar-bg" role="progressbar" aria-label="Trainability" aria-valuenow={dog.trainability} aria-valuemin="0" aria-valuemax="5">
                        <div className={`progress-bar overflow-visible ${trainabilityBg}`} style={trainabilityPercentage}>Trainability</div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="progress progress-bar-bg" role="progressbar" aria-label="Protectiveness" aria-valuenow={dog.protectiveness} aria-valuemin="0" aria-valuemax="5">
                        <div className={`progress-bar overflow-visible ${protectivenessBg}`} style={protectivenessPercentage}>Protectiveness</div>
                    </div>
                </li>
            </ul>
            <div className="card-body api-card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}

export default ApiSearchDogCard