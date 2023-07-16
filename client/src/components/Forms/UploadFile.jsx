import Client from '../../services/api'
import { useState } from 'react';

const UploadFile = ({ 
    profileType, 
    profileId, 
    handleCloseUploadFileForm,
    avatar,
    setAvatar
    }) => {
    
    const [file, setFile] = useState()
    
    const handleSubmit = async event => {
        event.preventDefault()
        const formData = new FormData();
        const fileName = `${profileId}-${file.name}`
        formData.append("pictureUrl", file, fileName)
        formData.append("profileType", profileType)
        formData.append("profileId", profileId)

        const response = await Client.post("/pictures/s3", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        setAvatar(response.data)
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