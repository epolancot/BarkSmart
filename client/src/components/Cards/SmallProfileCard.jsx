const SmallProfileCard = ({profile, css}) => {
    return (
        <div className={"row card short-card"}>
            <div className={`col-4 ${css}`}>
                <img src={profile.avatar} />
            </div>
            <div className="col-8">
                <p>{profile.name}</p>
            </div>
        </div>
    )
}

export default SmallProfileCard