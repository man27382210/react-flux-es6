import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';
import AppActions from '../../actions/AppActions';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  addItemClick(e) {
    e.preventDefault();
    AppActions.addItem();
  }

  render() {
    return (
      <ul className={styles.menu}>
        {this.props.items.map((item) => {
          return (<MenuItem item={item} />);
        }, this)}
        <li onClick={this.addItemClick}>add element</li>
      </ul>
    );
  }
}
