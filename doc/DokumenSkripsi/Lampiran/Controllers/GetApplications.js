const {getApplications} = require("../Features/GetApplications");
const GetAppByName = () => {
    return (req, res) => {
        const {name} = req.params
        getApplications(name).then((rows) => {
            res.send(rows);
        }).catch((e) => {
            res.send(e.message)
        });
    };
}


module.exports = {GetAppByName}