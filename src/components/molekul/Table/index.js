import React from "react";
import "./index.css";

const Table = ({ datas }) => {
  console.log(datas);
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Id Name</th>
          <th>Type</th>
          <th>Campaign</th>
          <th>Total BLast</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: "center", height: 22 }}>
        {datas.map((data) => {
          return (
            <tr>
              <td>{data.idName}</td>
              <td>{data.type}</td>
              <td>{data.campaign}</td>
              <td>{data.totalBlast}</td>
              <td className={data.status}>{data.status}</td>
              <td>{data.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
