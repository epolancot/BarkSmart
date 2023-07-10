import Unauthorized from '../../components/Unauthorized'
import { ChatLeftText, Plus, SendPlus } from 'react-bootstrap-icons'

const HomeUser = ({ user }) => {

    return user ? (
        <div className="container">
            <div className="row my-2 mt-5">
                <div className="col-md-6 py-1">
                    <div className="card h-100">
                        <div className="card-header themed-card-header">
                        <h5><span className="paws-emoji-white">🐾</span> Your Dog</h5>
                        </div>
                        <div className="card-body">
                            <div id="piechart_3d" className="img-fluid rounded mx-auto d-block"></div>
                        </div>
                        <hr/>
                        <div className="mb-3 d-flex justify-content-center">
                            <button type="button" className="btn themed-btn"><Plus/> Register New Dog</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 py-1">
                    <div className="card h-100">
                        <div className="card-header themed-card-header">
                            <h5><ChatLeftText /> Messages</h5>
                        </div>
                        <div className="card-body">
                            Card Body
                        </div>
                        <hr/>
                        <div className="mb-3 d-flex justify-content-center">
                            <button type="button" className="btn themed-btn"><SendPlus /> New Message</button>
                        </div>
                        
                    </div>
                </div>
        </div>
            </div>
            ) : (
            <Unauthorized />
            )
}

            export default HomeUser