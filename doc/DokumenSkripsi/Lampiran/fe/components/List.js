import React, { useEffect, useState } from "react";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const MAX = 10;

export default function List() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedData, setSelectedDate] = useState();

  function color(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      const dataType = arr[i].result;
      switch (dataType) {
        case "SUPPORTED":
          temp.push("blue");
          break;
        case "UNSUPPORTED":
          temp.push("red");
          break;
        default:
          temp.push("green");
      }
    }
    return temp;
  }
  useEffect(() => {
    Chart.register(CategoryScale);
  }, []);

  function getListData(page) {
    setIsLoading(true);
    fetch(`http://localhost:3000/get/app/type?limit=${MAX}&offset=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }

  function getData(name) {
    fetch(`http://localhost:3000/get/app/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedDate({
          name,
          data: {
            labels: data.map((val) => String(val.info)),
            datasets: [
              {
                label: name,
                data: data.map((val) => String(val.jumlah)),
                backgroundColor: color(data),
              },
            ],
          },
        });
      });
  }

  useEffect(() => {
    getListData(step);
  }, [step]);
  return (
    <div className="container">
      <h2 className="title">List APP</h2>
      {data[0] && (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="no">No</th>
                <th>Name</th>
                <th className="action-head"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr key={index} onClick={() => getData(val.app)}>
                  <th cla>{index + 1 + MAX * step}</th>
                  <td>{val.app}</td>
                  <td>View</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="action">
            <button
              onClick={() => setStep((prev) => prev - 1)}
              disabled={step <= 0 || isLoading}
            >
              Prev
            </button>
            <button
              onClick={() => setStep((prev) => prev + 1)}
              disabled={isLoading}
            >
              Next
            </button>
          </div>
        </>
      )}

      {selectedData && (
        <div className="selected">
          <h3 className="title">{selectedData.name}</h3>
          <Bar data={selectedData.data} />
        </div>
      )}
    </div>
  );
}
