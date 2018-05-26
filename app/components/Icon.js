// @flow
import React, { Component } from 'react';
import OBD from '../assets/obd2-01.svg';
import Play from '../assets/google-music.svg';
import Sound from '../assets/soundcloud.svg';
import styles from './Icon.css';

type Props = {};

export default class Icon extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.icons}>
          <Play className={styles.icon} />
          <Sound className={styles.icon} />
          <OBD className={styles.icon} />
        </div>
      </div>
    );
  }
}
