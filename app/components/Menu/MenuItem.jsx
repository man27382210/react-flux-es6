import React from 'react';
import AppActions from '../../actions/AppActions';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  onItemClick = (e) => {
    e.preventDefault();
    window.alert('You clicked ' + this.props.value.get("label"));
  }

  onItemRemove = (e) => {
    e.preventDefault();
    AppActions.removeItem(this.props.keyUse);
  }

  onAddCount = (e)=>{
    e.preventDefault();
    AppActions.addCount(this.props.keyUse);
  }

  render() {
    return (
      <li key={'menu-item-' + this.props.keyUse}>
        <a href="#" onClick={this.onItemClick}>
          {this.props.value.get("label")}
          <br/>
          {this.props.value.get("count")}
        </a>
      <br/>
        <a href="#" onClick={this.onItemRemove}>
          remove
        </a>
      <br/>
        <a href="#" onClick={this.onAddCount}>
          Add Count
        </a>
      </li>
    );
  }
}
