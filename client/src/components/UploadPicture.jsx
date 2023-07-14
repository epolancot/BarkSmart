import { useState } from 'react';
import Client from '../services/api'

const UploadPicture = ({ profileType, profileId }) => {
    const [file, setFile] = useState()
    
    const handleSubmit = async event => {
        event.preventDefault()

        const formData = new FormData();
        formData.append("pictureUrl", file)
        formData.append("profileType", profileType)
        formData.append("profileId", profileId)

        await Client.post("/pictures/s3", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
            })
    
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-center">
                <h4>Select profile picture</h4>
            </div>
            <div className="text-center mt-3">
                <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*"/>
            </div>
            <div className="text-center mt-2">
            <button type="submit" className="themed-btn">Submit</button>
            </div>
        </form>
    )
}

export default UploadPicture