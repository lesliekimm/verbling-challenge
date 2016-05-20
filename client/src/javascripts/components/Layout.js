import React from 'react';

import List from "./List";
import Search from "./Search";

export default class Layout extends React.Component {
  render() {
    return(
      <div className="container text-center">
        <h1>Verbling Challenge</h1>

        <Search />
        <List />
        
        <div className="row">
          <div className="col-sm-3">
            <button className="btn btn-success btn-block">Open All</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-danger btn-block">Close All</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-warning btn-block">Toggle All</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary btn-block">Add Item</button>
          </div>
        </div>
      </div>
    );
  }
}
