import React from "react";
import { CardRemaining, TableComponent } from "../../components";
import { SortIcon, VectorIcon } from "../../Assets";
import {Data} from "./Data"
import "./index.css";

const HomePage = () => {
  return (
    <div className="wrapperHomePage">
      {/* Card */}
      <div className="cardHomePage">
        <h4>Hello, Welcome to OCA!</h4>
        <span>
          Let’s start make some noise and make your campaign great again!{" "}
          <span className="click">click here</span> to spread your messages.
        </span>
      </div>
      {/* RemaininQouta */}
      <div className="homePageRemaining">
        <p className="remainingTitle">Remaining Quota</p>
        <div className="wrappperRemaining">
          <CardRemaining type="1" title="Call" number="4840 seconds" />
          <CardRemaining type="2" title="SMS" number="1245 messages" />
          <CardRemaining type="3" title="Email" number="7710 mails" />
          <CardRemaining type="1" title="Whatsapp" number="330 messages" />
        </div>
      </div>
      {/* table */}
      <div className="wrapperTable">
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #DDDDE4" }}>
          <p className="TableTitle">Recent BLAST</p>
          <div style={{ display: "flex" }}>
            <div className="TitleRight">
              <img src={SortIcon} width={12} height={12} alt="imageTable" />
              <p className="TableSort">Sort</p>
            </div>
            <div className="TitleRight">
              <img src={VectorIcon} width={12} height={12} alt="imageTable" />
              <p className="TableSort">Filter</p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: 175,
            overflow: "auto",
            marginBottom: '1%'
          }}
          className="tableScroll"
        >
         <TableComponent datas={Data} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
