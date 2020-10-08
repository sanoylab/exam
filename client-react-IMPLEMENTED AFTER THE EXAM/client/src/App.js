import React, { Component } from "react";

import "./App.css";

import { HomePage } from "./pages/homepage/homepage.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memberStates: [
        {
          id: 1,
          countryName: "Afghanistan",
          date: "2002-12-18",
          isParty: true,
        },
        {
          id: 2,
          countryName: "Albania",
          date: "1994-04-05",
          isParty: false,
        },
        {
          id: 3,
          countryName: "Algeria",
          date: "1995-11-12",
          isParty: true,
        },
        {
          id: 4,
          countryName: "Andorra",
          date: "2015-05-05",
          isParty: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="row">
        <HomePage
          partyMemberStates={this.state.memberStates.filter(
            (states) => (states.isParty == true)
          )}
          nonPartyMemberStates={this.state.memberStates.filter(
            (states) => (states.isParty == false)
          )}
          lastMemberState = {this.state.memberStates.reduce(function (r, a) {
            return r.date > a.date ? r : a;
          })}
        />
      </div>
    );
  }
}

export default App;
