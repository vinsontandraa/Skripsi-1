const {getApplicationsType} = require("../Features/GetApplications");
const GetAppType = () => {
    return (req, res) => {
        const {limit, offset} = req.query
        getApplicationsType(limit , offset).then((rows) => {
            res.send(rows);
        }).catch((e) => {
            res.send(e.message)
        });
    };
}


module.exports = {GetAppType}