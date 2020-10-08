/** @format */

import React from "react";
import "./homepage.styles.css";
import { Header } from "../../components/header/header.component";

export const HomePage = (props) => (
  <div className="container">
      <div className="row">
           <Header />
      </div>
      <div className="row">
          <h2>Number of Parties: {props.partyMemberStates.length} </h2>
          <h2>Last accession: {props.lastMemberState.countryName} on {props.lastMemberState.date}</h2>
      </div>
      <div className="row">
      <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {props.partyMemberStates.map(( states, index) => (
          <tr key={states.id}>
            <td>{index+1}</td>
            <td>{states.countryName}</td>
            <td>{states.date}</td>
          </tr>
        ))}{" "}
      </tbody>
    </table>
      </div>
      <div className="row">
      <div className="row">
          <h2>Number of Non- Parties: {props.nonPartyMemberStates.length} </h2>
      </div>
      <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {props.nonPartyMemberStates.map((states,index) => (
          <tr key={states.id}>
            <td>{index +1}</td>
            <td>{states.countryName}</td>
            <td>{states.date}</td>
          </tr>
        ))}{" "}
      </tbody>
    </table>
      </div>
   
    
  </div>
);
