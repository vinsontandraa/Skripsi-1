const {BigQuery} = require('@google-cloud/bigquery');
const options = {
    keyFilename: 'gsm-bigquery-credentials.json',
    projectId: 'httparchive-bigquery-346414',
};
const bigquery = new BigQuery(options)


async function getApplications(app = "Apache") {
    const getAppSql = `select app, info, count(app) as jumlah, result from httparchive-bigquery-346414.app_result.app_result where app = "${app}"  and (result != "NON CONCLUSIVE" and result != "NOT VERSIONED")
    group by app, info, result order by info ASC`
    const options = {
        query: getAppSql,
        location: 'US',
    };
    const [job] = await bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();
    return rows.filter(item => !item.info.includes("\\"));
}

async function getApplicationsType(limit = 5 , offset = 1) {
    const getAppSql = `select app from httparchive-bigquery-346414.Step.app_result where info != '' group by app  limit ${limit} offset ${offset}`
    const options = {
        query: getAppSql,
        location: 'US',
    };
    const [job] = await bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();
    return rows;
}

async function getApplicationsUrl(limit = 10, offset = 1) {
    const getAppSql = `select * from \`httparchive-bigquery-346414.URL_Result.url_result\` limit ${limit} offset ${offset} `

    const options = {
        query: getAppSql,
        location: 'US',
    };
    const [job] = await bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();
    return rows;
}

async function getPopularTech(limit = 10, offset = 1) {
    const getAppSql = `select * from \`httparchive-bigquery-346414.numsite_app_result_count.numsite_app_result_count\` limit ${limit} offset ${offset} `

    const options = {
        query: getAppSql,
        location: 'US',
    };
    const [job] = await bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();
    return rows;
}

module.exports = {getApplications, getApplicationsType, getApplicationsUrl, getPopularTech}