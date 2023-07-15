import Client from '../../services/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const UploadFile = ({ profileType, profileId, handleCloseUploadFileForm}) => {
    const navigate = useNavigate()

    const [file, setFile] = useState()

    const handleSubmit = async event => {
        event.preventDefault()

        const formData = new FormData();
        formData.append("pictureUrl", file, profileId)
        formData.append("profileType", profileType)
        formData.append("profileId", profileId)

        await Client.post("/pictures/s3", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        navigate(`/profile/view/${profileId}`)
        handleCloseUploadFileForm()   
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-center">
            </div>
            <div className="text-center mt-3 upload-picture-input">
                <input 
                    onChange={e => setFile(e.target.files[0])} 
                    type="file" 
                    accept="image/*"
                    />
            </div>
            <div className="text-center mt-4">
                <button type="submit" className="btn themed-btn">Upload</button>
            </div>
        </form>
    )
}

export default UploadFile