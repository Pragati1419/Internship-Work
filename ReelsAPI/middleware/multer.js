const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1"
})