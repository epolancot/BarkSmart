import Dogs from '../../components/Dogs.json'

const About = ({ user }) => {

    return (
        <div className="container mt-5 about">
            <div className="mb-5 text-center">
                <h4>This App represents the final project for GA's SEI bootcamp. Special thanks to the parents of these amazing pups for their support in this journey, you guys
                    are pawesome!</h4>
            </div>
            <div className="d-flex justify-content-center">
                <div className="about-img-grid text-center">
                    {Dogs.map((dog) => (
                        <div key={dog.id}>
                            <img src={dog.picture} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About