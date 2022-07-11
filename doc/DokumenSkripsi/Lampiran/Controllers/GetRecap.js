const {getApplicationsUrl} = require("../Features/GetApplications");
const GetAppRecap = () => {
    return (req, res) => {
        const {limit, offset} = req.query
        getApplicationsUrl(limit, offset).then((rows) => {
            res.send(rows);
        }).catch((e) => {
            res.send(e.message)
        });
    };
}


module.exports = {GetAppRecap}