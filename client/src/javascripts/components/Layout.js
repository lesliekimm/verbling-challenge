import React from 'react';

import List from "./List";
import Search from "./Search";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  addItem() {
    var title = prompt("Title", "placeholder...");
    var content = prompt("Content", "placeholder...");

    var currList = [{title: title, content: content}].concat(this.state.list);
    
    this.setState({list: currList});
  }

  render() {
    var data = this.state.list;

    return(
      <div className="container">
        <h1 className="text-center">Verbling Challenge</h1>

        <div className="row">
          <Search />
        </div>

        <div className="row">
          <List data={data} />
        </div>
        
        <div className="row text-center">
          <button className="btn btn-success margin-right"><h6>Open All</h6></button>
          <button className="btn btn-danger margin-right"><h6>Close All</h6></button>
          <button className="btn btn-warning margin-right"><h6>Toggle All</h6></button>
          <button className="btn btn-primary" onClick={this.addItem.bind(this)}><h6>Add Item</h6></button>
        </div>
      </div>
    );
  }
}