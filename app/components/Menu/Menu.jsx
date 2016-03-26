import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';
import AppActions from '../../actions/AppActions';
import {Map} from 'immutable';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static propTypes = {
    items: PropTypes.instanceOf(Map)
  };

  addItemClick(e) {
    e.preventDefault();
    AppActions.addItem();
  }

  render() {
    return (
      <ul className={styles.menu}>
        {this.props.items.map((value, key) => {
          return (<MenuItem value={value} keyUse={key} />);
        })}
        <li onClick={this.addItemClick}>add element</li>
      </ul>
    );
  }
}
