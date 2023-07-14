const router = require('express').Router()
const multer = require('multer')
const Aws = require('aws-sdk')
const { Picture } = require('../models')
const { User } = require('../models')
const { Dog } = require('../models')
const { Trainer } = require('../models')
const userSchema = require('../models/User')
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
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
})

router.post('/s3',
    upload.single('pictureUrl'), (req, res) => {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.file.originalname,
            Region: "us-east-1",
            Body: req.file.buffer,
            ACL: "public-read-write",
            ContentType: "image/jpeg"
        }
        s3.upload(params, async (error, data) => {
            if (error) {
                res.status(500).send({ "err": error })
            }

            switch (req.body.profileType) {
                case "user":
                    const user = await User.findById(req.body.profileId)
                    user.avatar = data.Location
                    user.save().then(result => {
                        res.status(200).send({
                            profileType: user.profileType,
                            profileId: user.profileId,
                            pictureUrl: user.data.Location,
                        })
                    })
                        .catch(err => {
                            res.send({ message: err })
                        })
                    break
                case "trainer":
                    const trainer = await Trainer.findById(req.body.profileId)
                    trainer.avatar = data.Location
                    trainer.save().then(result => {
                        res.status(200).send({
                            profileType: user.profileType,
                            profileId: user.profileId,
                            pictureUrl: user.data.Location,
                        })
                    })
                        .catch(err => {
                            res.send({ message: err })
                        })
                    break
                case "dog":
                    const dog = await Dog.findById(req.body.profileId)
                    dog.avatar = data.Location
                    dog.save().then(result => {
                        res.status(200).send({
                            profileType: user.profileType,
                            profileId: user.profileId,
                            pictureUrl: user.data.Location,
                        })
                    })
                        .catch(err => {
                            res.send({ message: err })
                        })
                    break
            }
        })
    }
)

router.get('/', async (req, res) => {
    try {
        const pictures = await Picture.find()
        console.log(pictures)
        res.send(pictures)
    } catch (err) {
        res.send({ message: err, m: "not working" })
    }
});

module.exports = router