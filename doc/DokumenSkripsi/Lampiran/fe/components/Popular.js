import React, { useEffect, useState } from "react";

const MAX = 10;

export default function Popular() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  function getPopularData() {
    setIsLoading(true);
    fetch(`http://localhost:3000/get/app/popular?limit=${MAX}&offset=${step}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getPopularData();
  }, [step]);
  return (
    <div className="container">
      <h2 className="title">Popular</h2>
      {data[0] && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                {Object.keys(data[0]).map((val) => (
                  <th>{val}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1 + MAX * step}</td>
                  {Object.values(val).map((val) => (
                    <td>{val}</td>
                  ))}
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
    </div>
  );
}
