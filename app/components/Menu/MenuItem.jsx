import React from 'react';
import AppActions from '../../actions/AppActions';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  onItemClick = (e) => {
    e.preventDefault();
    window.alert('You clicked ' + this.props.item["item"]);
  }

  onItemRemove = (e) => {
    e.preventDefault();
    console.log(this.props.item);
    AppActions.removeItem(this.props.item);
  }

  render() {
    return (
      <li key={'menu-item-' + this.props.item["key"]}>
        <a href="#" onClick={this.onItemClick}>
          {this.props.item["item"]}
        </a>
      <br/>
        <a href="#" onClick={this.onItemRemove}>
          remove
        </a>
      </li>
    );
  }
}
