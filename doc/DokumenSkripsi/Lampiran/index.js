const express = require('express')
const {GetPopularTech} = require("./Controllers/GetPopularTech");
const {GetAppRecap} = require("./Controllers/GetRecap");
const {GetAppType} = require("./Controllers/GetType");
const {GetAppByName} = require("./Controllers/GetApplications");
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.get('/get/app/name/:name', GetAppByName())
app.get('/get/app/type', GetAppType())
app.get('/get/app/url', GetAppRecap())
app.get('/get/app/popular', GetPopularTech())
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
