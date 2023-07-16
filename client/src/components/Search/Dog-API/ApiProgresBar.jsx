const ApiProgressBar = (trait) => {
let key = trait.trait[0]
let value = trait.trait[1]
let percentage
    switch (trait.trait[1]) {
        case 5:
            percentage = { width: "100%" }
            break
        case 4:
            percentage = { width: "80%" }
            break
        case 3:
            percentage = { width: "60%" }
            break
        case 2:
            percentage = { width: "40%" }
            break
        case 1:
            percentage = { width: "20%" }
            break
    }

    return (
        <div className="progress progress-bar-bg" role="progressbar" aria-label={key} aria-valuenow={value} aria-valuemin="0" aria-valuemax="5">
            <div className="progress-bar overflow-visible progress-bg" style={percentage}>{key}</div>
        </div>
    )
}

export default ApiProgressBar