import React from 'react';
import AppActions from '../../actions/AppActions';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  onItemClick = (e) => {
    e.preventDefault();
    window.alert('You clicked ' + this.props.value);
  }

  onItemRemove = (e) => {
    e.preventDefault();
    AppActions.removeItem({"key": this.props.keyUse, "value": this.props.value});
  }

  render() {
    return (
      <li key={'menu-item-' + this.props.keyUse}>
        <a href="#" onClick={this.onItemClick}>
          {this.props.value}
        </a>
      <br/>
        <a href="#" onClick={this.onItemRemove}>
          remove
        </a>
      </li>
    );
  }
}
