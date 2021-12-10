import dataSource from "./json/data.json";
import nginxData from "./json//Nginx.json";
import jQueryData from "./json/jQuery.json";
import apacheData from "./json/Apache.json";
import jQMigrateData from "./json/jQMigrate.json";
import pythonData from "./json/Python.json";
import phpData from "./json/PHP.json";
import PaginationTable from "./tabel/PaginationTable";
import BasicTable from "./tabel/BasicTable";
import React, { useEffect, useState } from "react";
import DataUnsupportedJson from "./tabel/json/category-per-jumlah-unsupported.json";
import DataNumsites from "./tabel/json/numsites-app-result.json";
import UrlNumsites from "./tabel/json/url-all-result-tabel.json";
import ApacheTable from "./tabel/json/apache-tabel.json";
import iisTable from "./tabel/json/iis-tabel.json";
import JqueryTable from "./tabel/json/jQuery-tabel.json";
import JqueryMigrateTable from "./tabel/json/jQueryMigrate-tabel.json";
import ModernizrTable from "./tabel/json/modernizr-tabel.json";
import MomentjsTable from "./tabel/json/momentjs-tabel.json";
import NginxTable from "./tabel/json/nginx-tabel.json";
import PhpTable from "./tabel/json/php-tabel.json";
import WordpressTable from "./tabel/json/wordpress-tabel.json";
import YoastseoTable from "./tabel/json/yoastseo-tabel.json";
import "./styles.css";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function colorngix() {
  var data = [];
  for (var i = 0; i < 265; i++) {
    if (i < 1) {
      data.push("#FFFFFF");
    } else if (i >= 1 && i < 255) {
      data.push("#FF0000");
    } else {
      data.push("#0000FF");
    }
  }
  return data;
}

function colorApache() {
  var data = [];
  for (var i = 0; i < 500; i++) {
    if (i < 1) {
      data.push("#FFFFFF");
    } else if (i >= 1 && i < 109) {
      data.push("#FF0000");
    } else {
      data.push("#0000FF");
    }
  }
  return data;
}

function colorjquery() {
  var data = [];
  for (var i = 0; i < 664; i++) {
    if (i < 1) {
      data.push("#FFFFFF");
    } else if (i >= 1 && i < 328) {
      data.push("#FF0000");
    } else {
      data.push("#0000FF");
    }
  }
  return data;
}

function colorphp() {
  var data = [];
  for (var i = 0; i < 438; i++) {
    if (i < 1) {
      data.push("#FFFFFF");
    } else if (i >= 1 && i < 420) {
      data.push("#FF0000");
    } else {
      data.push("#0000FF");
    }
  }
  return data;
}

function colorpython() {
  var data = [];
  for (var i = 0; i < 91; i++) {
    if (i < 1) {
      data.push("#FFFFFF");
    } else if (i >= 1 && i < 66) {
      data.push("#FF0000");
    } else {
      data.push("#0000FF");
    }
  }
  return data;
}

function colorJqueryMigrate() {
  var data = [];
  for (var i = 0; i < 700; i++) {
    if (i < 1) {
      data.push("#FFFFFF");
    } else if (i >= 1 && i < 280) {
      data.push("#FF0000");
    } else {
      data.push("#0000FF");
    }
  }
  return data;
}

const dataTemplate = {
  labels: [],
  datasets: [
    {
      label: "Total App",
      backgroundColor: "#EC932F",
      borderWidth: 1,
      data: [],
    },
  ],
};

const nginxTemplate = {
  labels: [],
  datasets: [
    {
      label: "",
      backgroundColor: colorngix(),
      data: [],
    },
  ],
};
const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      label: false,
    },
  },
};

const jQueryTemplate = {
  labels: [],
  datasets: [
    {
      label: "",
      backgroundColor: colorjquery(),
      data: [],
    },
  ],
};

const apacheTemplate = {
  labels: [],
  datasets: [
    {
      label: "",
      backgroundColor: colorApache(),
      data: [],
    },
  ],
};

const jQMigrateTemplate = {
  labels: [],
  datasets: [
    {
      label: "",
      backgroundColor: colorJqueryMigrate(),
      data: [],
    },
  ],
};

const pythonTemplate = {
  labels: [],
  datasets: [
    {
      label: "",
      backgroundColor: colorpython(),
      data: [],
    },
  ],
};

const phpTemplate = {
  labels: [],
  datasets: [
    {
      label: "",
      backgroundColor: colorphp(),
      data: [],
    },
  ],
};

const columnsUnsupported = [
  {
    Header: "Number of Categories by Unsupported Version",
    columns: [
      {
        Header: "Number of Unsupported = 0",
        accessor: "n0",
      },
      {
        Header: "Number of Unsupported = 1",
        accessor: "n1",
      },
      {
        Header: "Number of Unsupported = 2",
        accessor: "n2",
      },
      {
        Header: "Number of Unsupported = 3",
        accessor: "n3",
      },
      {
        Header: "Number of Unsupported >= 4",
        accessor: "n4",
      },
    ],
  },
];

const columnsNumsites = [
  {
    Header: "Top 10 popular technologies",
    columns: [
      {
        Header: "Num Sites",
        accessor: "num_sites",
      },
      {
        Header: "App",
        accessor: "app",
      },
      {
        Header: "Supported",
        accessor: "supported",
      },
      {
        Header: "Unsupported",
        accessor: "unsupported",
      },
      {
        Header: "Not Versioned",
        accessor: "not_versioned",
      },
      {
        Header: "Non Conclusive",
        accessor: "non_conclusive",
      },
    ],
  },
];

const columnsUrl = [
  {
    Header: "Usage of technologies per site (top 10)",
    columns: [
      {
        Header: "URL",
        accessor: "url",
      },
      {
        Header: "Supported",
        accessor: "supported",
      },
      {
        Header: "Unsupported",
        accessor: "unsupported",
      },
      {
        Header: "Not Versioned",
        accessor: "not_versioned",
      },
      {
        Header: "Non Conclusive",
        accessor: "non_conclusive",
      },
    ],
  },
];

function App() {
  const [mappedData, setMappedData] = useState();
  const [nginx, setNginxData] = useState();
  const [jQuery, setJQueryData] = useState();
  const [apache, setApacheData] = useState();
  const [jQMigrate, setJQMigrateData] = useState();
  const [python, setPythonData] = useState();
  const [php, setPhpData] = useState();

  const fieldNameMapper = (item) => ({
    label: item.app,
    jumlah: item.jumlah,
    info: item.info,
  });

  useEffect(() => {
    const { data } = dataSource;
    const { data1 } = nginxData;
    const { data2 } = jQueryData;
    const { data3 } = apacheData;
    const { data4 } = jQMigrateData;
    const { data5 } = pythonData;
    const { data6 } = phpData;
    let result = data.map(fieldNameMapper);
    let nginx = data1.map(fieldNameMapper);
    let jQuery = data2.map(fieldNameMapper);
    let apache = data3.map(fieldNameMapper);
    let jQMigrate = data4.map(fieldNameMapper);
    let python = data5.map(fieldNameMapper);
    let php = data6.map(fieldNameMapper);
    let labels = [];
    let labelsNginx = [];
    let labelsJQuery = [];
    let labelsApache = [];
    let labelsJQMigrate = [];
    let labelsPython = [];
    let labelsPhp = [];

    let jumlahArr = [];
    let nginxArr = [];
    let jQueryArr = [];
    let apacheArr = [];
    let jQMigrateArr = [];
    let pythonArr = [];
    let phpArr = [];

    result.forEach((item) => {
      let result = item.label.concat("  ", item.info);
      labels.push(result);
      jumlahArr.push(item.jumlah);
    });

    nginx.forEach((item) => {
      let result = item.label.concat("  ", item.info);
      labelsNginx.push(result);
      nginxArr.push(item.jumlah);
    });

    jQuery.forEach((item) => {
      let result = item.label.concat("  ", item.info);
      labelsJQuery.push(result);
      jQueryArr.push(item.jumlah);
    });

    apache.forEach((item) => {
      let result = item.label.concat("  ", item.info);
      labelsApache.push(result);
      apacheArr.push(item.jumlah);
    });
    jQMigrate.forEach((item) => {
      let result = item.label.concat("  ", item.info);
      labelsJQMigrate.push(result);
      jQMigrateArr.push(item.jumlah);
    });
    python.forEach((item) => {
      let result = item.label.concat("  ", item.info);
      labelsPython.push(result);
      pythonArr.push(item.jumlah);
    });
    php.forEach((item) => {
      let result = item.label.concat("  ", item.info);
      labelsPhp.push(result);
      phpArr.push(item.jumlah);
    });

    nginxTemplate.labels = labelsNginx;
    nginxTemplate.datasets.forEach((item) => {
      item.data = nginxArr;
    });
    dataTemplate.labels = labels;
    dataTemplate.datasets.forEach((item) => {
      item.data = jumlahArr;
    });
    jQueryTemplate.labels = labelsJQuery;
    jQueryTemplate.datasets.forEach((item) => {
      item.data = jQueryArr;
    });
    apacheTemplate.labels = labelsApache;
    apacheTemplate.datasets.forEach((item) => {
      item.data = apacheArr;
    });
    jQMigrateTemplate.labels = labelsJQMigrate;
    jQMigrateTemplate.datasets.forEach((item) => {
      item.data = jQMigrateArr;
    });
    pythonTemplate.labels = labelsPython;
    pythonTemplate.datasets.forEach((item) => {
      item.data = pythonArr;
    });
    phpTemplate.labels = labelsPhp;
    phpTemplate.datasets.forEach((item) => {
      item.data = phpArr;
    });

    setMappedData(dataTemplate);
    setNginxData(nginxTemplate);
    setJQueryData(jQueryTemplate);
    setApacheData(apacheTemplate);
    setJQMigrateData(jQMigrateTemplate);
    setPythonData(pythonTemplate);
    setPhpData(phpTemplate);
  }, []);

  if (nginx !== undefined) {
    console.log(nginx);
    return (
      <div>
        <div className="first-info">
          <h3>Overall Technologies Used </h3>
          <ul>
            <li>Supported : 5968474</li>
            <li>Unsupported : 27835200</li>
            <li>Non-conclusive : 83680305</li>
            <li>Not-versioned : 11171956</li>
          </ul>
        </div>
        <div className="first-info">
          <h3>Website with all supported apps</h3>
          <h7>Number of websites : 4511 </h7>
        </div>
        <div className="App">
          <BasicTable data={DataUnsupportedJson} columns={columnsUnsupported} />
          <BasicTable data={DataNumsites} columns={columnsNumsites} />
          <BasicTable data={UrlNumsites} columns={columnsUrl} />
          <PaginationTable data={ApacheTable} name={"Apache"} />
          <PaginationTable data={iisTable} name={"IIS"} />
          <PaginationTable data={JqueryTable} name={"JQUERY"} />
          <PaginationTable data={JqueryMigrateTable} name={"JQUERY Migrate"} />
          <PaginationTable data={ModernizrTable} name={"Modernizr"} />
          <PaginationTable data={MomentjsTable} name={"MomentJS"} />
          <PaginationTable data={NginxTable} name={"Nginx"} />
          <PaginationTable data={PhpTable} name={"PHP"} />
          <PaginationTable data={WordpressTable} name={"Wordpress"} />
          <PaginationTable data={YoastseoTable} name={"Yoast SEO"} />

          {/* <p>{JSON.stringify(dataTemplate)}</p> */}
          <Bar options={options} data={mappedData} />

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{ width: "10px", height: "10px", background: "blue" }}
                ></div>
                <p style={{ color: "blue" }}>Supported</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    marginLeft: "1rem",
                  }}
                ></div>
                <p style={{ color: "red" }}>Unsupported</p>
              </div>
            </div>

            <Bar options={options} data={nginx} />
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{ width: "10px", height: "10px", background: "blue" }}
                ></div>
                <p style={{ color: "blue" }}>Supported</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    marginLeft: "1rem",
                  }}
                ></div>
                <p style={{ color: "red" }}>Unsupported</p>
              </div>
            </div>

            <Bar options={options} data={jQuery} />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{ width: "10px", height: "10px", background: "blue" }}
                ></div>
                <p style={{ color: "blue" }}>Supported</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    marginLeft: "1rem",
                  }}
                ></div>
                <p style={{ color: "red" }}>Unsupported</p>
              </div>
            </div>

            <Bar options={options} data={apache} />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{ width: "10px", height: "10px", background: "blue" }}
                ></div>
                <p style={{ color: "blue" }}>Supported</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    marginLeft: "1rem",
                  }}
                ></div>
                <p style={{ color: "red" }}>Unsupported</p>
              </div>
            </div>

            <Bar options={options} data={jQMigrate} />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{ width: "10px", height: "10px", background: "blue" }}
                ></div>
                <p style={{ color: "blue" }}>Supported</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    marginLeft: "1rem",
                  }}
                ></div>
                <p style={{ color: "red" }}>Unsupported</p>
              </div>
            </div>

            <Bar options={options} data={python} />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{ width: "10px", height: "10px", background: "blue" }}
                ></div>
                <p style={{ color: "blue" }}>Supported</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    marginLeft: "1rem",
                  }}
                ></div>
                <p style={{ color: "red" }}>Unsupported</p>
              </div>
            </div>

            <Bar options={options} data={php} />
          </div>
        </div>
        {/* <h3>Example Mapped Data Take a not the logic not already functioned</h3> */}
        {/* {JSON.stringify(mappedData)} */}
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}

export default App;
