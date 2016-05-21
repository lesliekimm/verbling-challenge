import React from 'react';

export default class Item extends React.Component {
  render() {
    return(
      <div className="item">
        <h4 className="itemTitle">
          {this.props.item.title}
          <span class="glyphicon glyphicon-menu-down pull-right" aria-hidden="true"></span>
        </h4>
        {this.props.item.content}
      </div>
    );
  }
}
