import React, { Component, PropTypes } from 'react';

import Item from "./Item";

export default class List extends React.Component {
  renderItems() {
    return this.props.data.map((item) => (
      <Item item={item} />
    ));
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="list">
        {this.renderItems()}
      </div>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}
