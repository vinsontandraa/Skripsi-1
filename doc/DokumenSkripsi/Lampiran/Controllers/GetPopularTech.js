const {getPopularTech} = require("../Features/GetApplications");
const GetPopularTech = () => {
    return (req, res) => {
        const {limit, offset} = req.query
        getPopularTech(limit, offset).then((rows) => {
            res.send(rows);
        }).catch((e) => {
            res.send(e.message)
        });
    };
}


module.exports = {GetPopularTech}