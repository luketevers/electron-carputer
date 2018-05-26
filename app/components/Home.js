// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Home.css';
import Icon from './Icon';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <div className={styles.title}>Home</div>
          <Icon />
        </div>
      </div>
    );
  }
}
