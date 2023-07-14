const router = require('express').Router() 
const multer = require('multer') 
const Aws = require('aws-sdk') 
const { Picture } = require('../models') 
require("dotenv/config") 

const storage = multer.memoryStorage({
                destination: function (req, file, cb) {
                cb(null, '')
                }
})

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }   
}

const upload = multer({ storage: storage, fileFilter: filefilter })

const s3 = new Aws.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey:process.env.AWS_ACCESS_KEY_SECRET 
})

router.post('/s3', 
    upload.single('url'), (req, res) => {
        const params = {
            Bucket:process.env.AWS_BUCKET_NAME, 
            Key:req.file.originalname, 
            Region: "us-east-1",
            Body:req.file.buffer, 
            ACL:"public-read-write", 
            ContentType:"image/jpeg"    
        }
        s3.upload(params,(error,data)=>{
            if(error){
                res.status(500).send({"err":error}) 
            }
            const picture = new Picture({
                profileType: req.body.profileType,
                profileId: req.body.profileId,
                pictureUrl: data.Location
            });
            picture.save()
            .then(result => {
                res.status(200).send({
                    _id: result._id,
                    profileType: result.profileType,
                    profileId: result.profileId,
                    pictureUrl: data.Location,
                })
            })
            .catch(err => {
                res.send({ message: err })
            })
        })
    }
)

router.get('/', async (req, res) => {
    try {
        const pictures = await Picture.find()
        console.log(pictures)
        res.send(pictures)
    } catch (err) {
        res.send({ message: err, m:"not working" })
    }
});

module.exports = router